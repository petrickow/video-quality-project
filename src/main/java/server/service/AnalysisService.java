package server.service;

import java.awt.Color;
import java.awt.image.BufferedImage;
import java.io.ByteArrayInputStream;
import java.io.File;
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
	public static int ratePicture(String base64, String id) {

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

		BufferedImage gray = convertToGrayScale(bi, id);

		return rateDarkness(gray);

	}

	/*** Testing with a stackoverflow answer :) ***/
	private static int rateDarkness(BufferedImage bufferedImage) {

		/*
		 * These parameters can be adjusted to set granularity and max
		 * "darkness"
		 */
		int imageDetailGranularity = 1; // tradeoff, speed vs granularity
		int howDark = 75;

		int imageHeight = bufferedImage.getHeight();
		int imageWidth = bufferedImage.getWidth();
		long pixelCount = 0;
		long darkPixels = 0;
		for (int y = 0; y < imageHeight; y += imageDetailGranularity) {
			for (int x = 0; x < imageWidth; x += imageDetailGranularity) {
				pixelCount++;
				int rgb = bufferedImage.getRGB(x, y);
				int red = (rgb >> 16) & 0x000000FF;
				int green = (rgb >> 8) & 0x000000FF;
				int blue = (rgb) & 0x000000FF;
				if (red + green + blue < howDark) {
					darkPixels++;
				}
			}
		}
		float darkQuotient = (float) darkPixels / (float) pixelCount;
		System.out.println("darkQuotient for image: " + darkQuotient);

		if (darkQuotient >= 0.7 && !(darkQuotient < 0.7)) {
			return 3; // very dark
		} else if (darkQuotient >= 0.4 && (darkQuotient < 0.7))
			return 2; // mediocre
		else {
			return 1; // bright
		}
		// return darkQuotient > 0.1; // if darkQuotient is more than 0.1 it is
		// too dark according to da interwebz
		// (http://stackoverflow.com/questions/20341558/java-analyze-image-for-darkness)

	}

	private synchronized static BufferedImage convertToGrayScale(
			BufferedImage bi, String id) {
		for (int x = 0; x < bi.getHeight(); x++) {
			for (int y = 0; y < bi.getWidth(); y++) {
				Color c = new Color(bi.getRGB(y, x));
				int red = (int) (c.getRed() * 0.299);
				int green = (int) (c.getGreen() * 0.587);
				int blue = (int) (c.getBlue() * 0.114);
				Color newColor = new Color(red + green + blue, red + green
						+ blue, red + green + blue);
				bi.setRGB(y, x, newColor.getRGB());
			}
		}
/* Proof that it is gray
		File output = new File("gray" + id + ".jpg");

		if (!output.exists()) {
			try {
				ImageIO.write(bi, "jpg", output);
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
*/
		return bi;
	}
}
