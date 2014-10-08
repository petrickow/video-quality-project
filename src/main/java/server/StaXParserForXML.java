package server;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import javax.json.Json;
import javax.json.JsonArray;
import javax.json.JsonArrayBuilder;
import javax.json.JsonObject;
import javax.xml.stream.XMLEventReader;
import javax.xml.stream.XMLInputFactory;
import javax.xml.stream.XMLStreamException;
import javax.xml.stream.events.Attribute;
import javax.xml.stream.events.EndElement;
import javax.xml.stream.events.StartElement;
import javax.xml.stream.events.XMLEvent;

import org.apache.log4j.Logger;
import org.springframework.web.socket.TextMessage;

public class StaXParserForXML {
	static final String ITEM = "rtept";
	static final String ID = "id";
	static final String LAT = "lat";
	static final String LON = "lon";
	static final String SPEED = "speed";
	static final String ACC = "acc";

	private static Logger log = Logger.getLogger(StaXParserForXML.class.getName());

	
	public StaXParserForXML(String file) {

		readXML(file);
		//jsonFilefromXML(file);
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

				if (item != null) { 
					log.info("Passing item to UpdaterService: " + item.toString());

					UpdaterService.update(new TextMessage(item.toString()));
				}
			}
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (XMLStreamException e) {
			e.printStackTrace();
		}
		return items;
	}
	public JsonArray jsonFilefromXML(String file){
		//sending data as a json 
		List<XMLCreator> mylist = readXML(file);
		JsonArrayBuilder jsonArrayBuilder = Json.createArrayBuilder();
		for (XMLCreator listItems: mylist){
			if (listItems !=null){
			jsonArrayBuilder.add(Json.createObjectBuilder()
				.add("ID", listItems.getId())
				.add("LON",listItems.getLon())
				.add("LAT",listItems.getLat())
				.add("SPEED",listItems.getSpeed())
				.add("ACC",listItems.getAcc()));
			
			}
		}
		
		JsonArray values = jsonArrayBuilder.build();
		
		return values;
	}
	
}
