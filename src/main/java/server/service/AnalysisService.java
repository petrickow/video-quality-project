package server.service;

import java.awt.Color;
import java.awt.image.BufferedImage;
import java.awt.image.Raster;
import java.io.ByteArrayInputStream;
import java.io.File;
import java.io.IOException;
import java.io.InputStream;

import org.apache.commons.codec.binary.Base64;
import org.apache.log4j.Logger;

import javax.imageio.ImageIO;

/*
 * This thread will do the analysis of the metadata
 */
public class AnalysisService {

	private static Logger log = Logger.getLogger(DeviceListener.class);

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
			/* TODO create log for analyzer service */
			log.error(e.getLocalizedMessage());
		}

		// gets the histogram for the picture with the coresp. id
		int[] hist = parseHistogramForColors(bi, id);

		// calculates an average number for darkness
		System.out.println("ratePicture : " + id);
		
		int sum = 0;
		int pixelCount = bi.getWidth() * bi.getHeight();
		for (int i = 0; i < hist.length; i++) {
			sum += ((i) * hist[i]);
		}
		
		int average = sum / pixelCount;
		System.out.println("\t average: " + average + " = sum: " + sum + "/pixelCount: " + pixelCount);
		
		/* average is between 0-255, 0 being completely dark, and 255 completely white. */ 
		
		return 1; //
			
			

	}

	/**
	 * Compute the histograms for the red, green, blue and their combinations.
	 * 
	 * @param img
	 *            {@link BufferedImage} object which represents the image.
	 */
	private static int[] parseHistogramForColors(BufferedImage img, String id) {
		int height = img.getHeight();
		int width = img.getWidth();

		Color pixelColor = null;
		int computedGray = 0;
		int _redHistogram[] = new int[256];
		int _greenHistogram[] = new int[256];
		int _blueHistogram[] = new int[256];
		int _computedGrayHistogram1[] = new int[256];
		int r = 0;
		int g = 0;
		int b = 0;

		for (int x = 0; x < width; x++) {
			for (int y = 0; y < height; y++) {
				pixelColor = new Color(img.getRGB(x, y));
				r = pixelColor.getRed();
				g = pixelColor.getGreen();
				b = pixelColor.getBlue();

				_redHistogram[r]++;
				_greenHistogram[g]++;
				_blueHistogram[b]++;

				computedGray = computeGrayColor1(pixelColor);
				_computedGrayHistogram1[computedGray]++;

			}
		}
		return _computedGrayHistogram1;
	}

	/**
	 * Computes the combined histogram for a color pixel based on the following
	 * formula: RGB_Combined = R*0.2126 + G*0.7152 + B*0.0722
	 * 
	 * @param c
	 *            the color of a pixel.
	 * @return the combined value which is computed from R, G and B colors.
	 */
	private static int computeGrayColor1(Color c) {
		int r = c.getRed();
		int g = c.getGreen();
		int b = c.getBlue();
		int gray = (int) ((double) (r * 0.2126) + (double) (g * 0.7152) + (double) (b * 0.0722));
		return gray;
	}
}