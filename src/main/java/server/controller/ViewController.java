package server.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/*
 * Handles website logic
 */

@Controller
public class ViewController {

	@RequestMapping("/")
	public String index() {

		return "index";
	}

	@RequestMapping("/template-video-stream")
	public String templateVideoStream() {
		return "template-video-stream";
	}

}
