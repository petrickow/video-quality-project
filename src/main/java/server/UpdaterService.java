package server;

import java.util.ArrayList;
import java.nio.file.*;

import com.streamhub.api.*;
import com.streamhub.nio.NIOServer;

/*
 * Updates web clients model based on analyzed metadata
 * try to make this as a push-like service/streaming data to
 * clients
 * Does it have to keep track of clients? Or should we
 * have the clients poll the server for new information?
 */
public class UpdaterService implements SubscriptionListener, Runnable {
	
	ArrayList<String> webClients;
	private PushServer pushServer;
	private SubscriptionManager subscriptionManager;
	
	public UpdaterService() {
		pushServer = new NIOServer(7979);
	}
	

	@Override
	public void run() {
		// TODO Auto-generated method stub
		pushServer.start();
		subscriptionManager = pushServer.getSubscriptionManager();
		
		
		update();
	}
	
	
	private void update(/*the updated data*/) {
		
	}


	@Override
	public void onSubscribe(String arg0, Client arg1) {
		// TODO Auto-generated method stub
		
	}


	@Override
	public void onUnSubscribe(String arg0, Client arg1) {
		// TODO Auto-generated method stub
		
	}
	
	
}
