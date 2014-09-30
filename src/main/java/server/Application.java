package server;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.SpringApplication;
import org.springframework.context.annotation.ComponentScan;

@ComponentScan
@EnableAutoConfiguration
public class Application {

	public static void main(String[] args) {
		/* 
		 * Start the services and listener
		 */
		SpringApplication.run(Application.class, args);
	}
}

class ImJustRunning implements Runnable {

	@Override
	public void run() {
		while (true) {
			try {
				Thread.sleep(2000);
				System.out.println("I'm still here");
			} catch (InterruptedException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
	}

}