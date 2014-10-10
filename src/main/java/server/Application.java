package server;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.URL;
import java.net.URLConnection;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import org.apache.log4j.Logger;

import java.util.UUID;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;

import server.service.DeviceListener;

@ComponentScan
@EnableAutoConfiguration
public class Application {

	private static Logger log;

	public static void main(String[] args) {
		/*
		 * Start the services and listener
		 */
		log = Logger.getLogger(Logger.class);
		log.info("Logger started");
		new Thread(new ImJustRunning("valid1.xml")).start();
		new Thread(new ImJustRunning("valid1.xml")).start();
		// hardcoded schema path
		DeviceListener.schemaPath = System.getProperty("user.dir")
				+ "/src/main/resources/testXML/schema.xsd";

		SpringApplication.run(Application.class, args);
	}
}

/***
 * Im simulating a device making http POST to our restcontroller
 *
 */
class ImJustRunning implements Runnable {

	private static Logger log;
	byte[] data;

	
	public ImJustRunning(String xml) {
		log = Logger.getLogger(Logger.class);
		
		Path path = Paths.get(System.getProperty("user.dir")
				+ "/src/main/resources/testXML/" + xml);
		try {
			data = Files.readAllBytes(path);
		} catch (IOException e) {
			log.error("Could not find xml file " + path);
		}
	}

	@Override
	public void run() {

		/***
		 * This part is for testing the device listener, it is not finished at
		 * the moment It is a completely clean approach, not using StaXParser,
		 * but using some of the code from the class
		 */

		holdFor(5);
		// ugly-bugly but only for testing
		String stringData = null;

		// keep received xml every two seconds
		while (true) {
			try {
				final URL url = new URL("http://localhost:8080/xml");
				final URLConnection urlConnection = url.openConnection();
				urlConnection.setDoOutput(true);
				urlConnection.setRequestProperty("Content-Type",
						"application/xml; charset=utf-8");
				urlConnection.setRequestProperty("Method", "POST");
				urlConnection.connect();
				final OutputStream outputStream = urlConnection
						.getOutputStream();
				outputStream.write(data);
				outputStream.flush();
				final InputStream inputStream = urlConnection.getInputStream();
			} catch (Exception e) {

			}

			holdFor(2);
		}
		/***/

		/***
		 * For testing the StaXParserForXML //new
		 * StaXParserForXML(this.file.toString()); //this immediately sends data
		 ***/

		/***
		 * The good ol' somplified testing-program, no validiation of schema and
		 * no sensor data try { FileReader in = new FileReader(this.file);
		 * BufferedReader br = new BufferedReader(in); String line; while ((line
		 * = br.readLine()) != null) { if (line.contains(("<rtept"))) {
		 * Thread.sleep(3000); log.debug(line); UpdaterService.update(new
		 * TextMessage(line)); log.debug("Sent line to Updater service"); } }
		 * 
		 * } catch (FileNotFoundException e) { log.error(this.file +
		 * " was not found", e); } catch (IOException e) { log.error("IO error",
		 * e); } catch (InterruptedException e) { log.error("Interruption", e);
		 * }
		 ***/
	}

	private synchronized void holdFor(int sec) {
		try {
			this.wait(sec * 1000);
		} catch (InterruptedException e) {
			log.error("interrupted", e);
		}
	}
}