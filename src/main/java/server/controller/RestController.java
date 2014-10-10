package server.controller;

import java.io.FileNotFoundException;
import java.io.StringReader;
import java.io.StringWriter;
import java.util.UUID;

import javassist.convert.Transformer;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
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
	DeviceListener dl;
	@RequestMapping(value = "/xml", method = RequestMethod.POST)
	public String postXml(@RequestBody String xml) {

		System.out.println(xml); // TODO remove
		// pass the xml to the deviceListener
		
		DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
		DocumentBuilder builder;
		String receivedBackXML = "";
		try {
			builder = factory.newDocumentBuilder();
			InputSource insrc = new InputSource(new StringReader(xml));
			Document document = builder.parse(insrc);
			//String xmlString = document.toString();
			System.out.println(getStringFromDocument(document));
			//receivedBackXML = dl.generateJsonListString(dl.convertXmlToModel(xmlString));
			
		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return receivedBackXML; // return an xml,
														// indicating the xml
														// has been accepted
		// and the id if not already registered
	}
	
	public static String getStringFromDocument(Document doc) throws TransformerException {
	    DOMSource domSource = new DOMSource(doc);
	    StringWriter writer = new StringWriter();
	    StreamResult result = new StreamResult(writer);
	    TransformerFactory tf = TransformerFactory.newInstance();
	    javax.xml.transform.Transformer transformer = tf.newTransformer();
	    transformer.transform(domSource, result);
	    return writer.toString();
	}
}
