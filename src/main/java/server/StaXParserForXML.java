package server;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import javax.xml.stream.XMLEventReader;
import javax.xml.stream.XMLInputFactory;
import javax.xml.stream.XMLStreamException;
import javax.xml.stream.events.Attribute;
import javax.xml.stream.events.EndElement;
import javax.xml.stream.events.StartElement;
import javax.xml.stream.events.XMLEvent;

import org.springframework.web.socket.TextMessage;

public class StaXParserForXML {
	static final String ITEM = "rtept";
	static final String ID = "id";
	static final String LAT = "lat";
	static final String LON = "lon";
	static final String SPEED = "speed";
	static final String ACC = "acc";

	public StaXParserForXML(String file) {

		readXML(file);
	}

	/*
	 * public List<XMLCreator> readXMLData(){ StaXParserForXML read = new
	 * StaXParserForXML(); List<XMLCreator> readConfig =
	 * read.readXML("src/main/resources/testXML/test1.xml"); for (XMLCreator
	 * item : readConfig) { System.out.println(item); } return readConfig; }
	 */

	@SuppressWarnings({ "unchecked" })
	public List<XMLCreator> readXML(String configFile) {
		List<XMLCreator> items = new ArrayList<XMLCreator>();
		try {
			// First, create a new XMLInputFactory
			XMLInputFactory inputFactory = XMLInputFactory.newInstance();
			// Setup a new eventReader
			InputStream in = new FileInputStream(configFile);
			XMLEventReader eventReader = inputFactory.createXMLEventReader(in);
			// read the XML document
			XMLCreator item = null;

			while (eventReader.hasNext()) {
				XMLEvent event = eventReader.nextEvent();

				if (event.isStartElement()) {
					StartElement startElement = event.asStartElement();
					// If we have an item element, we create a new item
					if (startElement.getName().getLocalPart() == (ITEM)) {
						item = new XMLCreator();
						// We read the attributes from this tag and add the date
						// attribute to our object
						Iterator<Attribute> attributes = startElement
								.getAttributes();
						while (attributes.hasNext()) {
							Attribute attribute = attributes.next();
							if (attribute.getName().toString().equals(ID)) {
								item.setLat(attribute.getValue());
							}
							if (attribute.getName().toString().equals(LAT)) {
								item.setLat(attribute.getValue());
							}
							if (attribute.getName().toString().equals(LON)) {
								item.setLon(attribute.getValue());
							}
							if (attribute.getName().toString().equals(SPEED)) {
								item.setLat(attribute.getValue());
							}
							if (attribute.getName().toString().equals(ACC)) {
								item.setAcc(attribute.getValue());
								System.out.println("reading corectililyy");
							}
						}
					}
					
				}
				
				// If we reach the end of an item element, we add it to the list
				if (event.isEndElement()) {
					EndElement endElement = event.asEndElement();
					if (endElement.getName().getLocalPart() == (ITEM)) {
						items.add(item);
					}
				}
				if (item != null) 
					
					UpdaterService.update(new TextMessage(item.toString()));
			}
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (XMLStreamException e) {
			e.printStackTrace();
		}
		return items;
	}

}
