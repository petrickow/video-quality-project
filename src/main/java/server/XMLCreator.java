package server;

public class XMLCreator {
	private String id;
	private String lat;
	private String lon;
	private String speed;
	private String acc;
	

	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getLat() {
		return lat;
	}
	public void setLat(String lat) {
		this.lat = lat;
	}
	public String getLon() {
		return lon;
	}
	public void setLon(String lon) {
		this.lon = lon;
	}
	public String getSpeed() {
		return speed;
	}
	public void setSpeed(String speed) {
		this.speed = speed;
	}
	public String getAcc() {
		return acc;
	}
	public void setAcc(String acc) {
		this.acc = acc;
	}
	
	@Override
	public String toString() {
		return "Rtept [lat=" + lat + ", lon=" + lon + ", speed=" + speed
				+ ", acc=" + acc + "]";
	}

}
