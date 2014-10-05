package server;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map.Entry;

import javax.websocket.Session;

import org.hornetq.api.core.client.ClientSession;
import org.springframework.web.socket.WebSocketHandler;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.TextMessage;
/*
 * Updates web clients metadata
 * try to make this as a push-like service/streaming data to
 * clients
 * Does it have to keep track of clients? Or should we
 * have the clients poll the server for new information?
 */
public class UpdaterService {
	
	// better aproach? Easier to look up if the session is stored
	static HashMap<String, WebSocketSession> clients = new HashMap<String, WebSocketSession>();
	
	protected static void update(TextMessage message) {
		System.out.println("Sending to " + clients.size());
		
		for (Entry<String, WebSocketSession> s : clients.entrySet()) {
			try {
				if (s.getValue().isOpen()) {
					s.getValue().sendMessage(message);
				} else { 
					clients.remove(s.getKey());
				}
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
	}
		
	protected static boolean add(WebSocketSession session) {
		if (clients.containsKey(session.getId())) {
			return false;
		}
		else {
			clients.put(session.getId(), session);
			return true;
		}
	}
	
	protected static boolean remove(String uniqueId) {
		if (clients.remove(uniqueId) != null) {
			return true;
		} else {
			return false;
		}
	}
}
