package FixedIncomeData;

import java.util.HashMap;
import java.util.Map;

import com.streamhub.util.Random;

public class Treasury {
	private static final String[][] TREASURY_RAW_DATA = {
		{ "T-BOND 11.250 15-Feb-2015","147.5","11.25","15/02/15","2.33","7.63","AAA","No","UST1" },
		{ "T-BOND 10.625 15-Aug-2015","146.87","10.63","15/08/15","2.46","7.23","AAA","No","UST2" },
		{ "T-BOND 9.875 15-Nov-2015","143.22","9.88","15/11/15","2.58","6.9","AAA","No","UST3" },
		{ "T-BOND 9.250 15-Feb-2016","140.12","9.25","15/02/16","2.69","6.6","AAA","No","UST4" },
		{ "T-BOND 7.250 15-May-2016","127.28","7.25","15/05/16","2.9","5.7","AAA","No","UST5" },
		{ "T-BOND 7.500 15-Nov-2016","129.52","7.5","15/11/16","3.05","5.79","AAA","No","UST6" },
		{ "T-BOND 8.750 15-May-2017","139.14","8.75","15/05/17","3.16","6.29","AAA","No","UST7" },
		{ "T-BOND 8.875 15-Aug-2017","140.59","8.88","15/08/17","3.22","6.31","AAA","No","UST8" },
		{ "T-BOND 9.125 15-May-2018","145.22","9.13","15/05/18","3.27","6.28","AAA","No","UST9" },
		{ "T-BOND 9.000 15-Nov-2018","145.14","9","15/11/18","3.39","6.2","AAA","No","UST10" },
		{ "T-BOND 8.875 15-Feb-2019","144.31","8.88","15/02/19","3.47","6.15","AAA","No","UST11" },
		{ "T-BOND 8.125 15-Aug-2019","138.57","8.13","15/08/19","3.58","5.86","AAA","No","UST12" },
		{ "T-BOND 8.500 15-Feb-2020","142.12","8.5","15/02/20","3.7","5.98","AAA","No","UST13" },
		{ "T-BOND 8.750 15-May-2020","144.7","8.75","15/05/20","3.74","6.05","AAA","No","UST14" },
		{ "T-BOND 8.750 15-Aug-2020","144.98","8.75","15/08/20","3.79","6.04","AAA","No","UST15" },
		{ "T-BOND 7.875 15-Feb-2021","137.34","7.88","15/02/21","3.88","5.73","AAA","No","UST16" },
		{ "T-BOND 8.125 15-May-2021","140.19","8.13","15/05/21","3.89","5.8","AAA","No","UST17" },
		{ "T-BOND 8.125 15-Aug-2021","140.48","8.13","15/08/21","3.92","5.78","AAA","No","UST18" },
		{ "T-BOND 8.000 15-Nov-2021","139.72","8","15/11/21","3.94","5.73","AAA","No","UST19" },
		{ "T-BOND 7.250 15-Aug-2022","132.79","7.25","15/08/22","4.03","5.46","AAA","No","UST20" },
		{ "T-BOND 7.625 15-Nov-2022","137.09","7.63","15/11/22","4.03","5.56","AAA","No","UST21" },
		{ "T-BOND 7.125 15-Feb-2023","131.91","7.13","15/02/23","4.07","5.4","AAA","No","UST22" },
		{ "T-BOND 6.250 15-Aug-2023","122.91","6.25","15/08/23","4.11","5.09","AAA","No","UST23" },
		{ "T-BOND 7.500 15-Nov-2024","139.1","7.5","15/11/24","4.07","5.39","AAA","No","UST24" },
		{ "T-BOND 7.625 15-Feb-2025","141.12","7.63","15/02/25","4.06","5.4","AAA","No","UST25" },
		{ "T-BOND 6.875 15-Aug-2025","132.82","6.88","15/08/25","4.09","5.18","AAA","No","UST26" },
		{ "T-BOND 6.000 15-Feb-2026","121.96","6","15/02/26","4.16","4.92","AAA","No","UST27" },
		{ "T-BOND 6.750 15-Aug-2026","131.56","6.75","15/08/26","4.16","5.13","AAA","No","UST28" },
		{ "T-BOND 6.500 15-Nov-2026","128.42","6.5","15/11/26","4.19","5.06","AAA","No","UST29" },
		{ "T-BOND 6.625 15-Feb-2027","130.16","6.63","15/02/27","4.2","5.09","AAA","No","UST30" },
		{ "T-BOND 6.375 15-Aug-2027","127.02","6.38","15/08/27","4.23","5.02","AAA","No","UST31" },
		{ "T-BOND 6.125 15-Nov-2027","123.81","6.13","15/11/27","4.25","4.95","AAA","No","UST32" },
		{ "T-BOND 5.500 15-Aug-2028","116.02","5.5","15/08/28","4.27","4.74","AAA","No","UST33" },
		{ "T-BOND 5.250 15-Nov-2028","112.93","5.25","15/11/28","4.27","4.65","AAA","No","UST34" },
		{ "T-BOND 5.250 15-Feb-2029","112.9","5.25","15/02/29","4.27","4.65","AAA","No","UST35" },
		{ " T-BOND 6.125 15-Aug-2029","124.98","6.13","15/08/29","4.27","4.9","AAA","No","UST36" },
		{ "T-BOND 6.250 15-May-2030","127.2","6.25","15/05/30","4.27","4.91","AAA","No","UST37" },
		{ "T-BOND 5.375 15-Feb-2031","115.07","5.38","15/02/31","4.3","4.67","AAA","No","UST38" },
		{ "T-BOND 4.500 15-Feb-2036","103.16","4.5","15/02/36","4.3","4.36","AAA","No","UST39" },
		{ "T-BOND 4.750 15-Feb-2037","107.17","4.75","15/02/37","4.3","4.43","AAA","No","UST40" },
		{ "T-BOND 5.000 15-May-2037","111.34","5","15/05/37","4.3","4.49","AAA","No","UST41" },
		{ "T-BOND 4.375 15-Feb-2038","101.12","4.38","15/02/38","4.31","4.33","AAA","No","UST42" },
		{ "T-BOND (30YR) 4.250 15-May-2039","98.94","4.25","15/05/39","4.31","4.3","AAA","No","UST43" },
		{ "T-BOND (DBL OLD 30YR) 4.500 15-May-2038","103.25","4.5","15/05/38","4.3","4.36","AAA","No","UST44" },
		{ "T-BOND (OLD 30YR) 3.500 15-Feb-2039","86.57","3.5","15/02/39","4.31","4.04","AAA","No","UST45" },
		{ "T-NOTE 6.500 15-Feb-2010","104.5","6.5","15/02/10","0.27","6.22","AAA","No","UST46" },
		{ "T-NOTE 5.750 15-Aug-2010","106.48","5.75","15/08/10","0.43","5.4","AAA","No","UST47" },
		{ "T-NOTE 5.000 15-Feb-2011","107.38","5","15/02/11","0.68","4.66","AAA","No","UST48" },
		{ "T-NOTE 5.000 15-Aug-2011","109.06","5","15/08/11","0.88","4.58","AAA","No","UST49" },
		{ "T-NOTE 4.875 15-Feb-2012","110.02","4.88","15/02/12","1.13","4.43","AAA","No","UST50" },
		{ "T-NOTE 4.375 15-Aug-2012","109.27","4.38","15/08/12","1.42","4","AAA","No","UST51" },
		{ "T-NOTE 4.000 15-Nov-2012","108.62","4","15/11/12","1.44","3.68","AAA","No","UST52" },
		{ "T-NOTE 3.875 15-Feb-2013","108.28","3.88","15/02/13","1.58","3.58","AAA","No","UST53" },
		{ "T-NOTE 3.625 15-May-2013","107.21","3.63","15/05/13","1.74","3.38","AAA","No","UST54" },
		{ "T-NOTE 4.250 15-Aug-2013","109.78","4.25","15/08/13","1.83","3.87","AAA","No","UST55" },
		{ "T-NOTE 4.250 15-Nov-2013","109.73","4.25","15/11/13","1.97","3.87","AAA","No","UST56" },
		{ "T-NOTE 4.000 15-Feb-2014","108.71","4","15/02/14","2.05","3.68","AAA","No","UST57" },
		{ "T-NOTE 4.750 15-May-2014","112.32","4.75","15/05/14","2.12","4.23","AAA","No","UST58" }
	};
	
	public static Map<String, Treasury> treasuries = new HashMap<String, Treasury>();

	private final String issue;
	private final double coupon;
	private final String maturityDate;
	private final String rating;
	private double ytm;
	private double yield;
	private double price;

	private double initialPrice;
	
	static {
		for (String[] rawTreasury : TREASURY_RAW_DATA) {
			String topic = rawTreasury[8];
			double price = Double.parseDouble(rawTreasury[1]);
			double coupon = Double.parseDouble(rawTreasury[2]);
			double ytm = Double.parseDouble(rawTreasury[4]);
			double yield = Double.parseDouble(rawTreasury[5]);
			Treasury treasury = new Treasury(rawTreasury[0], price, coupon, rawTreasury[3], ytm, yield, rawTreasury[6]);
			treasuries.put(topic, treasury);
		}
	}
	
	private Treasury(String issue, double price, double coupon, String maturityDate, double ytm, double yield, String rating) {
		this.issue = issue;
		this.initialPrice = price;
		this.price = price;
		this.coupon = coupon;
		this.maturityDate = maturityDate;
		this.ytm = ytm;
		this.yield = yield;
		this.rating = rating;
	}

	public String getIssue() {
		return issue;
	}

	public double getPrice() {
		return price;
	}

	public double getCoupon() {
		return coupon;
	}

	public String getMaturityDate() {
		return maturityDate;
	}

	public double getYtm() {
		return ytm;
	}

	public double getYield() {
		return yield;
	}

	public String getRating() {
		return rating;
	}
	
	public void randomPriceChange() {
		double pointsChange = Random.numberBetween(1, 20) / 100.0;
		
		if (Random.numberBetween(1, 10) > 4) {
			if (price >= initialPrice) {
				price -= pointsChange;
			} else {
				price += pointsChange;
			}
		} else {
			if (price >= initialPrice) {
				price += pointsChange;
			} else {
				price -= pointsChange;
			}
		}
		
		yield = (coupon / price) * 100.0;
	}
}
