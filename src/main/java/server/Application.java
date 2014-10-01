package server;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.SpringApplication;
import org.springframework.context.annotation.ComponentScan;

@ComponentScan
@EnableAutoConfiguration
public class Application {

	public static UpdaterService updater;
	
	public static void main(String[] args) {
		/* 
		 * Start the services and listener
		 */
		updater = new UpdaterService();
		Thread spammer = new Thread(new ImJustRunning(updater));
		spammer.start();
		SpringApplication.run(Application.class, args);
	}
}


class ImJustRunning implements Runnable {

	UpdaterService updater;
	
	protected ImJustRunning(UpdaterService updater) {
		this.updater = updater;
	}
	
	@Override
	public void run() {
		while (true) {
			try {
				Thread.sleep(2000);
				System.out.println("SPAM");
				updater.update();
			} catch (InterruptedException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
	}

}