package server;

import java.util.ArrayList;

/*
 * Updates web clients model based on analyzed metadata
 * try to make this as a push-like service/streaming data to
 * clients
 * Does it have to keep track of clients? Or should we
 * have the clients poll the server for new information?
 */
public class UpdaterService implements Runnable {
	
	ArrayList<String> webClients;
	
	
	@Override
	public void run() {
		// TODO Auto-generated method stub
		update();
	}
	
	
	private void update(/*the updated data*/) {
		webClients.size();
	}
	
	
}
