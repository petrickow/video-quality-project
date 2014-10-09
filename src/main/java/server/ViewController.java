package server;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

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
