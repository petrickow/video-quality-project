package server.controller;

import java.io.FileNotFoundException;
import java.io.StringReader;
import java.io.StringWriter;
import java.util.UUID;

import javassist.convert.Transformer;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.transform.OutputKeys;
import javax.xml.transform.TransformerConfigurationException;
import javax.xml.transform.TransformerException;
import javax.xml.transform.TransformerFactory;
import javax.xml.transform.dom.DOMSource;
import javax.xml.transform.stream.StreamResult;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.w3c.dom.Document;
import org.xml.sax.InputSource;

import server.service.DeviceListener;

// not sure why I can't import
@org.springframework.web.bind.annotation.RestController
public class RestController {

	@RequestMapping(value = "/xml", method = RequestMethod.POST)
	public String postXml(@RequestBody String xml) {
		DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
		DocumentBuilder builder;
		try {
			builder = factory.newDocumentBuilder();
			InputSource insrc = new InputSource(new StringReader(xml));
			Document document = builder.parse(insrc);
			
			DeviceListener.restReceivedMetaData(document);
		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return xml; // return an xml,
														// indicating the xml
														// has been accepted
		// and the id if not already registered
	}
	
	public static String getStringFromDocument(Document doc) {
	    DOMSource domSource = new DOMSource(doc);
	    StringWriter writer = new StringWriter();
	    StreamResult result = new StreamResult(writer);
	    TransformerFactory tf = TransformerFactory.newInstance();

		try {
		    javax.xml.transform.Transformer transformer;
			transformer = tf.newTransformer();
			transformer.transform(domSource, result);

		} catch (TransformerConfigurationException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (TransformerException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	    return writer.toString();
	}
}
