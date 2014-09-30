package StockDemo;

import java.text.DecimalFormat;
import java.text.NumberFormat;
import java.util.Locale;

import org.apache.log4j.Logger;

import com.streamhub.api.Client;
import com.streamhub.api.JsonPayload;
import com.streamhub.api.PushServer;
import com.streamhub.api.SubscriptionListener;
import com.streamhub.api.SubscriptionManager;
import com.streamhub.util.Random;

public class StockDemo implements SubscriptionListener {
	public static boolean isServerStopped = false;
	private final Logger log = Logger.getLogger(getClass());
	private final BulkStockStreamer stockStreamer = new BulkStockStreamer();
	private final PushServer streamingServer;
	private final String[][] stocks = { 
			{ "AA", "ALCOA INC", "13.61" },
			{ "AXP", "AMER EXPRESS INC", "40.28" },
			{ "BA", "BOEING CO", "50.99" },
			{ "BAC", "BK OF AMERICA CP", "16.44" },
			{ "C", "CITIGROUP INC", "3.70" }, 
			{ "CAT", "CATERPILLAR INC", "60.17" },
			{ "CSCO", "Cisco Systems, Inc.", "23.95" },
			{ "CVX", "CHEVRON CORP", "78.33" },
			{ "DD", "DU PONT E I DE NEM", "34.15" },
			{ "DIS", "WALT DISNEY-DISNEY C", "29.39" },
			{ "GE", "GEN ELECTRIC CO", "15.94" },
			{ "HD", "HOME DEPOT INC", "27.33" },
			{ "HPQ", "HEWLETT PACKARD CO", "49.90" },
			{ "IBM", "INTL BUSINESS MACH", "126.88" },
			{ "INTC", "Intel Corporation", "19.73" },
			{ "JNJ", "JOHNSON AND JOHNS DC", "60.81" },
			{ "JPM", "JP MORGAN CHASE CO", "44.299999" },
			{ "KFT", "KRAFT FOODS INC", "26.93" },
			{ "KO", "COCA COLA CO THE", "56.22" },
			{ "MCD", "MCDONALDS CP", "62.82" },
			{ "MMM", "3M COMPANY", "78.10" },
			{ "MRK", "MERCK CO INC", "33.36" },
			{ "MSFT", "Microsoft Corporation", "29.21" },
			{ "PFE", "PFIZER INC", "17.72" },
			{ "PG", "PROCTER GAMBLE CO", "62.09" },
			{ "T", "AT&T INC.", "26.47" },
			{ "TRV", "THE TRAVELERS CO", "54.30" },
			{ "UTX", "UNITED TECH", "67.30" },
			{ "VZ", "VERIZON COMMUN", "30.38" },
			{ "WMT", "WAL MART STORES", "52.52" },
			{ "XOM", "EXXON MOBIL CP", "72.86" }		
	};

	public StockDemo(PushServer streamingServer) {
		this.streamingServer = streamingServer;
		SubscriptionManager subscriptionManager = streamingServer.getSubscriptionManager();
		subscriptionManager.addSubscriptionListener(this);
	}

	public void onSubscribe(String topic, Client client) {
		log.info("Client '" + client.getUid() + "' subscribing to topic '" + topic + "'");

		sendStaticData(topic, client);

		if (!stockStreamer.isStarted()) {
			stockStreamer.start();
		}
	}

	public void onUnSubscribe(String topic, Client client) {
		/**
		 * streamingServer.publish() takes care of the unsubscribe so we don't
		 * need to do anything.
		 * 
		 * If we were using client.send() we might want to remove the client
		 * from our subscription list or implement some other behaviour
		 * dependent on our application. For example, if we were writing a chat
		 * room application, we might want to notify all other clients that this
		 * client has left the chat room.
		 */
	}

	private void sendStaticData(String topic, Client client) {
		for (String[] stock : stocks) {
			String symbol = stock[0];

			if (topic.equals(symbol)) {
				String company = stock[1];
				String price = stock[2];
				JsonPayload payload = new JsonPayload(symbol);
				payload.addField("Symbol", symbol);
				payload.addField("Company", company);
				payload.addField("LastPrice", price);
				payload.addField("Direction", "up");
				payload.addField("Change", "0.00");
				payload.addField("PercentChange", "0.00%");
				client.send(symbol, payload);
			}
		}
	}

	private class BulkStockStreamer {
		private boolean isStarted = false;

		public void start() {
			isStarted = true;

			for (String[] stock : stocks) {
				new Thread(new StockStreamer(stock)).start();
			}
		}

		public boolean isStarted() {
			return isStarted;
		}
	}

	private class StockStreamer implements Runnable {
		private final NumberFormat priceParser = NumberFormat.getNumberInstance(Locale.ENGLISH);
		private final DecimalFormat priceFormatter = (DecimalFormat) DecimalFormat.getNumberInstance(Locale.ENGLISH);
		private String symbol;
		private String company;
		private Double currentPrice;
		private Double lastSent;
		private Double initial;
		private String lastSentFormattedChange = "0.00";

		public StockStreamer(String[] stock) {
			priceFormatter.applyPattern("0.00");
			this.symbol = stock[0];
			this.company = stock[1];
			this.currentPrice = parse(stock[2]);
			this.lastSent = currentPrice;
			this.initial = currentPrice;
		}

		public void run() {
			while (streamingServer.isStarted()) {
				Random.sleepBetween(1000, 10000);
				String direction = "down";
				JsonPayload payload = new JsonPayload(symbol);
				double pipsChange = Random.numberBetween(1, 3) / 100.0;

				if (Random.numberBetween(1, 10) > 4) {
					if (currentPrice >= initial) {
						currentPrice -= pipsChange;
					} else {
						currentPrice += pipsChange;
					}
				} else {
					if (currentPrice >= initial) {
						currentPrice += pipsChange;
					} else {
						currentPrice -= pipsChange;
					}
				}

				if (currentPrice >= lastSent) {
					direction = "up";
				}

				double change = parse(format(currentPrice)) - initial;
				String formattedChange = format(change);
				
				if (! lastSentFormattedChange.equals(formattedChange)) {
					double percentageChange = parse(formattedChange) / initial * 100.0;
					payload.addField("Symbol", symbol);
					payload.addField("Company", company);
					payload.addField("LastPrice", format(currentPrice));
					payload.addField("Direction", direction);
					payload.addField("Change", formattedChange);
					payload.addField("PercentChange", format(percentageChange) + "%");
					streamingServer.publish(symbol, payload);
					lastSent = currentPrice;
					lastSentFormattedChange = formattedChange;
				}
			}
		}

		private double parse(String doubleAsString) {
			double result = 0.0;
			
			try {
				Number number = priceParser.parse(doubleAsString);
				result = number.doubleValue();
			} catch (Exception e) {
				e.printStackTrace();
			}
			
			return result;
		}
		
		private String format(double value) {
			return priceFormatter.format(value);
		}
	}
}