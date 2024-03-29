package server.config;

import java.io.IOException;

import org.apache.log4j.Logger;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

public class WebsocketStreamReq extends TextWebSocketHandler {
	private static Logger log = Logger.getLogger(WebsocketStreamReq.class
			.getName());

	@Override
	public void handleTextMessage(WebSocketSession session, TextMessage message)
			throws IOException {
		log.debug(message);
		session.getAcceptedProtocol();
	}
}
