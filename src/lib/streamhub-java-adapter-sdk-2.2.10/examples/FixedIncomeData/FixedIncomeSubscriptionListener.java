package FixedIncomeData;

import java.text.DecimalFormat;
import java.text.NumberFormat;
import java.util.HashSet;
import java.util.Set;
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;

import org.apache.log4j.Logger;

import com.streamhub.api.Client;
import com.streamhub.api.JsonPayload;
import com.streamhub.api.Payload;
import com.streamhub.api.PushServer;
import com.streamhub.api.SubscriptionListener;
import com.streamhub.api.SubscriptionManager;
import com.streamhub.util.Random;
import com.streamhub.util.Sleep;

public class FixedIncomeSubscriptionListener implements SubscriptionListener {
	private static final NumberFormat priceFormatter = new DecimalFormat("0.00");
	private final Logger log = Logger.getLogger(getClass());
	private final PushServer streamingServer;
	private final Set<String> topicsToStream = new HashSet<String>();
	private final BondStreamer bondStreamer = new BondStreamer();
	private final ScheduledExecutorService scheduler = Executors.newScheduledThreadPool(5);

	public FixedIncomeSubscriptionListener(PushServer streamingServer) {
		this.streamingServer = streamingServer;
		SubscriptionManager subscriptionManager = streamingServer.getSubscriptionManager();
		subscriptionManager.addSubscriptionListener(this);
		new Thread(bondStreamer).start();
	}

	public void onSubscribe(String topic, Client client) {
		if (Treasury.treasuries.containsKey(topic)) {
			log.info("Client '" + client.getUid() + "' subscribing to topic '" + topic + "'");
			sendStaticData(topic, client);
			synchronized (topicsToStream) {
				topicsToStream.add(topic);
			}
		}
	}

	public void onUnSubscribe(String topic, Client client) {
		if (Treasury.treasuries.containsKey(topic)) {
			log.info("Client '" + client.getUid() + "' unsubscribing from topic '" + topic + "'");
			synchronized (topicsToStream) {
				topicsToStream.remove(topic);
			}
		}
	}

	private void sendStaticData(String topic, Client client) {
		Treasury treasury = Treasury.treasuries.get(topic);
		Payload payload = new JsonPayload(topic);
		payload.addField("Issue", treasury.getIssue());
		payload.addField("Coupon", format(treasury.getCoupon()));
		payload.addField("Price", format(treasury.getPrice()));
		payload.addField("Yield", format(treasury.getYield()));
		payload.addField("MaturityDate", treasury.getMaturityDate());
		client.send(topic, payload);
	}

	private class BondStreamer implements Runnable {
		public void run() {
			while (streamingServer.isStarted()) {
				synchronized (topicsToStream) {
					for (final String topic : topicsToStream) {
						if (Random.numberBetween(1, 10) > 5) {
							scheduler.schedule(new Runnable() {
								public void run() {
									Treasury treasury = Treasury.treasuries.get(topic);
									treasury.randomPriceChange();
									Payload payload = new JsonPayload(topic);
									payload.addField("Price", format(treasury.getPrice()));
									payload.addField("Yield", format(treasury.getYield()));
									streamingServer.publish(topic, payload);
								}
							}, Random.numberBetween(1000, 6000), TimeUnit.MILLISECONDS);
						}
					}
				}
				Sleep.seconds(6);
			}
			scheduler.shutdownNow();
		}
	}

	private static String format(double value) {
		return priceFormatter.format(value);
	}
}