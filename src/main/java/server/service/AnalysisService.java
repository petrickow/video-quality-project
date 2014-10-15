package server.service;

import java.awt.image.BufferedImage;
import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.InputStream;

import org.apache.commons.codec.binary.Base64;

import javax.imageio.ImageIO;

/*
 * This thread will do the analysis of the metadata
 */
public class AnalysisService {

	/**
	 * Rate the picture on the level of median brightness
	 * 
	 * @param base64
	 *            - the encoded image we want to rate
	 * @return an integer on the arbitrary scale of 1 - n indicating the quality
	 * @throws IOException
	 */
	public static boolean ratePicture(String base64) {

		InputStream in = new ByteArrayInputStream(Base64.decodeBase64(base64));
		BufferedImage bi = null;
		try {
			bi = ImageIO.read(in);
			in.close();
		} catch (IOException e) {
			/*
			 * TODO create log for analyzer service
			 * log.error(e.getLocalizedMessage());
			 * log.error(e.printStackTrace());
			 */
		}

		return isDark(bi);

	}

	/*** Testing with a stackoverflow answer :) ***/
	private static boolean isDark(BufferedImage bufferedImage) {
		int imageHeight = bufferedImage.getHeight();
		int imageWidth = bufferedImage.getWidth();
		long pixelCount = 0;
		long darkPixels = 0;
		for (int y = 0; y < imageHeight; y += 10) {
			for (int x = 0; x < imageWidth; x += 10) {
				pixelCount++;
				int rgb = bufferedImage.getRGB(x, y);
				int red = (rgb >> 16) & 0x000000FF;
				int green = (rgb >> 8) & 0x000000FF;
				int blue = (rgb) & 0x000000FF;
				if (red + green + blue < 30)
					darkPixels++;
			}
		}
		float darkQuotient = (float) darkPixels / (float) pixelCount;
		return darkQuotient > 0.1; // if darkQuotient is more than 0.1 it is too
									// dark according to da interwebz
									// (http://stackoverflow.com/questions/20341558/java-analyze-image-for-darkness)
	}
}
