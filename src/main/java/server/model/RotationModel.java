package server.model;

public class RotationModel extends GenericMetaDataModel  {

	private long azimuth;
	private long pitch;
	private long roll;

	public long getAzimtuh() {
		return azimuth;
	}

	public void setAzimuth(long azimuth) {
		this.azimuth = azimuth;
	}

	public long getPitch() {
		return pitch;
	}

	public void setPitch(long pitch) {
		this.pitch = pitch;
	}

	public long getRoll() {
		return roll;
	}

	public void setRoll(long roll) {
		this.roll = roll;
	}

	
}
