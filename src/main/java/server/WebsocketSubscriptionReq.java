package server;

import java.io.IOException;

import org.apache.log4j.Logger;
import org.springframework.web.socket.WebSocketHandler;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.handler.TextWebSocketHandler;

public class WebsocketSubscriptionReq extends TextWebSocketHandler {
	private static Logger log = Logger.getLogger(WebsocketSubscriptionReq.class.getName());

	/* This is what is called when we get a message from client */
    @Override
    public void handleTextMessage(WebSocketSession session, TextMessage message) throws IOException {
        log.debug("We just got: " + message.getPayload());
        log.debug(session.getLocalAddress()); //this might be used for id?
        session.sendMessage(new TextMessage("You got it, now stop calling"));
        //session.getAcceptedProtocol();
        UpdaterService.add(session);
    }
}

