package server;

import java.util.ArrayList;
import java.nio.file.*;



/*
 * Updates web clients model based on analyzed metadata
 * try to make this as a push-like service/streaming data to
 * clients
 * Does it have to keep track of clients? Or should we
 * have the clients poll the server for new information?
 */
public class UpdaterService implements Runnable {
	
	ArrayList<String> webClients;
		
	public UpdaterService() {
		
	}
	

	@Override
	public void run() {
		// TODO Auto-generated method stub
				
	}

	private void update(/*the updated data*/) {
		
	}
	
}
