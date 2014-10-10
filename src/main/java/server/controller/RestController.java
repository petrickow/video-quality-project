package server.controller;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import server.service.DeviceListener;

// not sure why I can't import
@org.springframework.web.bind.annotation.RestController
public class RestController {

	@RequestMapping(value = "/xml", method = RequestMethod.POST)
	public String postXml(@RequestBody String xml) {

		System.out.println(xml); // TODO remove
		// pass the xml to the deviceListener

		return "We need to create the response xml"; // return an xml,
														// indicating the xml
														// has been accepted
		// and the id if not already registered
	}
}
