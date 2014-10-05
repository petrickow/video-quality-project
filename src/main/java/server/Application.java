package server;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.SpringApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.socket.TextMessage;

@ComponentScan
@EnableAutoConfiguration
public class Application {
	
	public static void main(String[] args) {
		/* 
		 * Start the services and listener
		 */
		new Thread(new ImJustRunning()).start();;
		
		SpringApplication.run(Application.class, args);
	}
}


class ImJustRunning implements Runnable {
	
	@Override
	public void run() {
		int i = 0;
		while (true) {
			try {
				Thread.sleep(3000);
				System.out.println("SPAM");
				UpdaterService.update(new TextMessage("Ich bin das SPAM " + i++));
			} catch (InterruptedException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
	}

}