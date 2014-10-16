package server;

import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.URL;
import java.net.URLConnection;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import org.apache.log4j.Logger;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;

@ComponentScan
@EnableAutoConfiguration
public class Application {

	private static Logger log;

	public static void main(String[] args) {
		
		log = Logger.getLogger(Logger.class);
		log.info("Logger started");
		new Thread(new ImJustRunning("valid1.xml")).start();
		new Thread(new ImJustRunning("valid2.xml")).start();

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
			this.data = Files.readAllBytes(path);
		} catch (IOException e) {
			log.error("Could not find xml file " + path);
		}
	}

	@Override
	public void run() {

		/***
		 * This part is for testing the device listener. Each threads keeps
		 * sending the same xml-file until the cows come home
		 */
		holdFor(5);
		// ugly-bugly but only for testing

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
				outputStream.write(this.data);
				outputStream.flush();
				InputStream inputStream = urlConnection.getInputStream();
				//TODO check the response
			} catch (Exception e) {

			}

			holdFor(2);
		}
	}

	private synchronized void holdFor(int sec) {
		try {
			this.wait(sec * 1000);
		} catch (InterruptedException e) {
			log.error("interrupted", e);
		}
	}
}