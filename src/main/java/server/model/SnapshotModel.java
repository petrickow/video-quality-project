package server.model;

public class SnapshotModel extends GenericMetaDataModel {
	
	private String encodedImage;
	private int aggregatedQuality;
	private int currentBrightness; 
	
	public String getSnapshot() {
		return encodedImage;
	}

	public void setSnapshot(String encodedImage) {
		this.encodedImage = encodedImage;
	}

	public int getAggregatedQuality() {
		return aggregatedQuality;
	}

	public void setAggregatedQuality(int aggregatedQuality) {
		this.aggregatedQuality = aggregatedQuality;
	}

	public int getCurrentBrightness() {
		return currentBrightness;
	}

	public void setCurrentBrightness(int currentBrightness) {
		this.currentBrightness = currentBrightness;
	}
}
