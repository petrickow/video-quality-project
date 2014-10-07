package server;

import java.io.IOException;
import java.util.Map.Entry;
import java.util.concurrent.ConcurrentHashMap;

import org.apache.log4j.Logger;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;

/*
 * Updates web clients metadata
 * try to make this as a push-like service/streaming data to
 * clients
 * Does it have to keep track of clients? Or should we
 * have the clients poll the server for new information?
 */
public class UpdaterService {
	private static Logger log = Logger.getLogger(UpdaterService.class.getName());


	// better aproach? Easier to look up if the session is stored
	static ConcurrentHashMap<String, WebSocketSession> clients = new ConcurrentHashMap<String, WebSocketSession>();

	protected synchronized static void update(TextMessage message) {
		log.info("Websocket map has " + clients.size() + " entries");

		for (Entry<String, WebSocketSession> s : clients.entrySet())
			try {
				if (s.getValue().isOpen())
					s.getValue().sendMessage(message);
				else
					clients.remove(s.getKey());
			} catch (IOException e) {
				log.error("IO error when sending to webclient via websocket", e);
			}
	}

	protected static boolean add(WebSocketSession session) {
		clients.putIfAbsent(session.getId(), session);
		return true;

	}

	protected static boolean remove(String uniqueId) {
		if (clients.remove(uniqueId) != null)
			return true;
		else
			return false;
	}
}
