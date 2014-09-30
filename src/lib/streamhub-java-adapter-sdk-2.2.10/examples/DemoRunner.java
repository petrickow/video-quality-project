import java.io.File;
import java.io.IOException;

import Chat.ChatListener;
import FixedIncomeData.FixedIncomeSubscriptionListener;
import StockDemo.StockDemo;

import com.streamhub.api.PushServer;
import com.streamhub.nio.NIOServer;

public class DemoRunner {
	public static void main(String[] args) throws Exception {
        String httpServerStartDir = ".";
        File workingDir = new File(".");
        for (String file : workingDir.list()) {
            if ("examples".equals(file))  {
                httpServerStartDir = "examples";
            }
        }
        String url = "http://localhost:7979/";
		PushServer streamingServer = new NIOServer(7979);
		streamingServer.addStaticContent(new File(httpServerStartDir));
		streamingServer.start();
		new StockDemo(streamingServer);
		new FixedIncomeSubscriptionListener(streamingServer);
		new ChatListener(streamingServer);
		launchBrowser(url);
		System.out.println("Demo started at " + url);
		System.out.println("Press any key to stop...");
		System.in.read();
		streamingServer.stop();
		System.out.println("Demo stopping...");
	}

	public static void launchBrowser(String url) {
		try {
			launch(url);
		} catch (IOException e) {}
	}
	
	private static void launch(String url) throws IOException {
		String os = System.getProperty("os.name").toLowerCase();
		Runtime rt = Runtime.getRuntime();
		
		if (os.contains("win")) {
			rt.exec(new String[] { "cmd.exe", "/C", "start", url });
		} else if (os.contains("mac")) {
			rt.exec("open " + url);
		} else {
			rt.exec(new String[] { "sh", "-c", "firefox \"" + url + "\"" });
		}		
	}
}