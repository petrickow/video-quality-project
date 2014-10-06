package server;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.socket.WebSocketHandler;
import org.springframework.web.socket.config.annotation.EnableWebSocket;
import org.springframework.web.socket.config.annotation.WebSocketConfigurer;
import org.springframework.web.socket.config.annotation.WebSocketHandlerRegistry;

@Configuration
@EnableWebSocket
public class WebSocketConfig implements WebSocketConfigurer {

    @Override
    public void registerWebSocketHandlers(WebSocketHandlerRegistry registry) {
        registry.addHandler(subscribeToMetadata(), "/subscribeToMetadata");
        registry.addHandler(requestStream(), "/requestStream");
        System.out.println("WS registered");
    }

    @Bean
    public WebSocketHandler subscribeToMetadata() {
        return new WebsocketSubscriptionReq();
    }

    @Bean
    protected WebSocketHandler requestStream() {
    	return new WebsocketStreamReq();
    }
}