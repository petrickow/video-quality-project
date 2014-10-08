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
		
		/*** This part is for testing the device listener, it is not finished at the moment
		 * It is a completely clean approach, not using StaXParser, but using some of the code from the class 
		holdFor(5);
											// 	ugly-bugly but only for testing
		DeviceListener deviceListener = new DeviceListener(System.getProperty("user.dir") + "/src/main/resources/testXML/schema.xsd");
		
		// keep received xml every two seconds
		while (true) {  
			
			try {
				deviceListener.test_receivedMetaData(this.file.getPath());
			} catch (FileNotFoundException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			holdFor(2);
		}
		***/

		/*** For testing the StaXParserForXML
		//new StaXParserForXML(this.file.toString()); //this immediately sends data
		***/
		
		
		/*** The good ol' somplified testing-program, no validiation of schema and no sensor data ***/
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
	
	private synchronized void holdFor(int sec) {
		try {
			this.wait(sec * 1000);
		} catch (InterruptedException e) {
			log.error("interrupted", e);
		}
	}
}