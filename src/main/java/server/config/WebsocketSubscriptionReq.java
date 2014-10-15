package server.config;

import java.io.IOException;

import javax.json.stream.JsonParsingException;

import org.apache.log4j.Logger;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import server.service.DeviceListener;
import server.service.UpdaterService;

public class WebsocketSubscriptionReq extends TextWebSocketHandler {
	private static Logger log = Logger.getLogger(WebsocketSubscriptionReq.class.getName());
	
	/* This is what is called when we get a message from client */
    @Override
    public void handleTextMessage(WebSocketSession session, TextMessage message) throws IOException {
        log.debug("We just got: " + message.getPayload());
        
        try {
        	session.sendMessage(new TextMessage(DeviceListener.createJsonFromHistory()));
        } catch (JsonParsingException e) {
        	log.error(e.getLocalizedMessage()+" Could not get history");
        }
        //session.getAcceptedProtocol();
        UpdaterService.add(session);
    }
}

