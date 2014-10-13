package server.controller;

import java.io.IOException;
import java.io.StringReader;
import java.io.StringWriter;
import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;
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
import org.xml.sax.SAXException;

import server.service.DeviceListener;

// not sure why I can't import
@org.springframework.web.bind.annotation.RestController
public class RestController {

	@RequestMapping(value = "/xml", method = RequestMethod.POST)
	public String postXml(@RequestBody String xml) {
		DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
		DocumentBuilder builder;
		Document document = null;
		InputSource insrc = new InputSource(new StringReader(xml));

		try {
			builder = factory.newDocumentBuilder();
			document = builder.parse(insrc);
		} catch (ParserConfigurationException e) {
			// TODO Return appropriate error message to device for all the different errors that might occur
			e.printStackTrace();
		} catch (SAXException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
		
		DeviceListener.restReceivedMetaData(document);
		return xml; // return an xml, indicating the xml has been accepted
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
