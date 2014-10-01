package server;

import java.io.IOException;
import java.util.ArrayList;

import javax.websocket.Session;

import org.springframework.web.socket.WebSocketHandler;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.TextMessage;
/*
 * Updates web clients model based on analyzed metadata
 * try to make this as a push-like service/streaming data to
 * clients
 * Does it have to keep track of clients? Or should we
 * have the clients poll the server for new information?
 */
public class UpdaterService {
	
	static ArrayList<WebSocketSession> webClients; //store this in a better way
	
	/**
	 * Constructor creates listener for websockets?
	 */
	public UpdaterService() {
		webClients = new ArrayList<WebSocketSession>();
	}
	
	protected void update(/*the updated data*/) {
		for (WebSocketSession s : webClients) {
			try {
				if (s.isOpen())
					s.sendMessage(new TextMessage("I AM the spam"));
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
	}
	
	protected static boolean add(WebSocketSession session) {
		// might be redundant check, have to read up on arraylists
		if (webClients.contains(session)) {
			return false;
		} else {
			return webClients.add(session);
		}
	}
}
