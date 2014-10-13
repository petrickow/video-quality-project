package server.model;

public class SnapshotModel extends GenericMetaDataModel {
	
	private String encodedImage;

	public String getSnapshot() {
		return encodedImage;
	}

	public void setSnapshot(String encodedImage) {
		this.encodedImage = encodedImage;
	}
}
