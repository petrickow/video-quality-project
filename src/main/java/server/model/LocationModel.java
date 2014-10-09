package server.model;

public class LocationModel extends GenericMetaDataModel {
	
	private long speed;
	private long altitude;
	private long latitude;
	private long longitude;
	private long accuracy;
	private String provider;

	

	public long getSpeed() {
		return speed;
	}
	public void setSpeed(long speed) {
		this.speed = speed;
	}
	public long getAltitude() {
		return altitude;
	}
	public void setAltitude(long altitude) {
		this.altitude = altitude;
	}
	public long getLatitude() {
		return latitude;
	}
	public void setLatitude(long latitude) {
		this.latitude = latitude;
	}
	public long getLongitude() {
		return longitude;
	}
	public void setLongitude(long longitude) {
		this.longitude = longitude;
	}
	public long getAccuracy() {
		return accuracy;
	}
	public void setAccuracy(long accuracy) {
		this.accuracy = accuracy;
	}
	public String getProvider() {
		return provider;
	}
	public void setProvider(String provider) {
		this.provider = provider;
	}

}
