package server;

import java.util.ArrayList;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

/*
 * From template
 * Handles website logic
 */

@Controller
public class ViewController {

	ArrayList<Thread> connections = new ArrayList<Thread>();

	@RequestMapping("/greeting")
	// for testing
	public String greeting(
			@RequestParam(value = "name", required = false, defaultValue = "World") String name,
			Model model) {
		model.addAttribute("name", name);
		Thread arrived = new Thread(new Worker());
		arrived.start();
		this.connections.add(arrived);

		return "greeting";
	}

	@RequestMapping("/")
	public String index() {

		return "index";
	}

	@RequestMapping("/template-video-stream")
	public String templateVideoStream() {
		return "template-video-stream";
	}

	class Worker implements Runnable {

		@Override
		public void run() {
			// do stuff

			System.out.println(ViewController.this.connections.size());
		}

	}
}