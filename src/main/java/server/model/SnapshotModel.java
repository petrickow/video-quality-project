package server.model;

public class SnapshotModel extends GenericMetaDataModel {
	
	private String encodedImage;
	private int brightnessQuality;
	private int aggregatedQuality;
	
	public String getSnapshot() {
		return encodedImage;
	}

	public void setSnapshot(String encodedImage) {
		this.encodedImage = encodedImage;
	}

	public int getBrightnessQuality() {
		return brightnessQuality;
	}

	public void setBrightnessQuality(int brightnessQuality) {
		this.brightnessQuality = brightnessQuality;
	}

	public int getAggregatedQuality() {
		return aggregatedQuality;
	}

	public void setAggregatedQuality(int aggregatedQuality) {
		this.aggregatedQuality = aggregatedQuality;
	}
}
