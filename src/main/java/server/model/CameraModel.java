package server.model;

public class CameraModel extends GenericMetaDataModel {
	
	private int x;
	private int y;
	private float verticalViewAngle;
	private float horizontalViewAngle;

	

	public int getX() {
		return x;
	}
	public void setX(int x) {
		this.x = x;
	}
	public int getY() {
		return y;
	}
	public void setY(int y) {
		this.y = y;
	}
	public float getVerticalViewAngle() {
		return verticalViewAngle;
	}
	public void setVerticalViewAngle(float verticalViewAngle) {
		this.verticalViewAngle = verticalViewAngle;
	}
	public float getHorizontalViewAngle() {
		return horizontalViewAngle;
	}
	public void setHorizontalViewAngle(float horizontalViewAngle) {
		this.horizontalViewAngle = horizontalViewAngle;
	}
	
}
