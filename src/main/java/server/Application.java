package server;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.socket.TextMessage;

@ComponentScan
@EnableAutoConfiguration
public class Application {

	public static void main(String[] args) {
		/*
		 * Start the services and listener
		 */
		new Thread(new ImJustRunning()).start();
		;

		SpringApplication.run(Application.class, args);
	}
}

class ImJustRunning implements Runnable {

	@Override
	public void run() {
		// TODO Quick and dirty XML send remove once real XML Reader is
		// implemented
		File file = new File(System.getProperty("user.dir")
				+ "/src/main/resources/testXML/test1.xml");
		try {

			FileReader in = new FileReader(file);
			BufferedReader br = new BufferedReader(in);
			String line;
			while ((line = br.readLine()) != null)
				if (line.contains(("<rtept"))) {
					Thread.sleep(3000);
					System.out.println(line);
					UpdaterService.update(new TextMessage(line));
				}
			this.run();

		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		/*
		 * int i = 0; while (true) try { Thread.sleep(3000);
		 * System.out.println("SPAM"); UpdaterService .update(new
		 * TextMessage("Ich bin das SPAM " + i++)); } catch
		 * (InterruptedException e) { // TODO Auto-generated catch block
		 * e.printStackTrace(); }
		 */
	}
}