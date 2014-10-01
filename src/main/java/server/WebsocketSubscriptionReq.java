package server;

import java.io.IOException;

import org.springframework.web.socket.WebSocketHandler;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.handler.TextWebSocketHandler;

public class WebsocketSubscriptionReq extends TextWebSocketHandler {

	/* This is what is called when we get a message from client */
    @Override
    public void handleTextMessage(WebSocketSession session, TextMessage message) throws IOException {
        System.out.println(message);
        session.sendMessage(new TextMessage("You got it, now stop calling"));
        //session.getAcceptedProtocol();
        UpdaterService.add(session);
        
    }
}

