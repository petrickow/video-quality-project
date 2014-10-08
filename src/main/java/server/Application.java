package server;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;

import org.apache.log4j.Logger;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.socket.TextMessage;

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
		new Thread(new ImJustRunning("test1.xml")).start();
		new Thread(new ImJustRunning("test2.xml")).start();

		SpringApplication.run(Application.class, args);
	}
}

class ImJustRunning implements Runnable {

	File file;
	private static Logger log;

	public ImJustRunning(String xml) {
		log = Logger.getLogger(Logger.class);
		this.file = new File(System.getProperty("user.dir")
				+ "/src/main/resources/testXML/" + xml);
	}

	@Override
	public void run() {
		// TODO Quick and dirty XML send remove once real XML Reader is
		// implemented

		// new StaXParserForXML(this.file.toString()); //this immediately sends data
		// all data

		try {
			FileReader in = new FileReader(this.file);
			BufferedReader br = new BufferedReader(in);
			String line;
			while ((line = br.readLine()) != null) {
				if (line.contains(("<rtept"))) {
					Thread.sleep(3000);
					log.debug(line);
					UpdaterService.update(new TextMessage(line));
					log.debug("Sent line to Updater service");
				}
			}

		} catch (FileNotFoundException e) {
			log.error(this.file + " was not found", e);
		} catch (IOException e) {
			log.error("IO error", e);
		} catch (InterruptedException e) {
			log.error("Interruption", e);
		}
	}
}