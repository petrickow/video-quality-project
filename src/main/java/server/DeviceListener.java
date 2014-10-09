package server;

import server.model.*;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;
import java.util.UUID;
import java.util.concurrent.ConcurrentHashMap;

import javax.xml.stream.XMLEventReader;
import javax.xml.stream.XMLInputFactory;
import javax.xml.stream.events.Attribute;
import javax.xml.stream.events.EndElement;
import javax.xml.stream.events.StartElement;
import javax.xml.stream.events.XMLEvent;
import javax.xml.transform.stream.StreamSource;
import javax.xml.validation.Validator;
import javax.xml.XMLConstants;
import javax.xml.validation.Schema;
import javax.xml.validation.SchemaFactory;

import org.springframework.web.socket.TextMessage;
import org.xml.sax.SAXException;
import org.apache.log4j.Logger;

/***
 * Handles incoming meta data from devices recording by validating XML and
 * passes the information to the UpdaterService
 * */
public class DeviceListener {

	// Note to self: schemapath, device-list with id, logger
	String schemaPath;
	UUID id;
	private static Logger log;
	ConcurrentHashMap<UUID, String> deviceIdMapping;
	/***
	 * When receiving a xml from device, the xml is converted to apropriate
	 * format and broadcasted to web clients using UpdaterService class
	 * 
	 * @param xmsPath
	 *            is t he path to schema used for validation
	 */
	public DeviceListener(String xmsPath, UUID id) {
		this.schemaPath = xmsPath;
		this.id = id; //for testing
	}

	/***
	 * This exicst for testing purposes
	 * 
	 * @param xmlPath
	 *            absolute path to xml you want to broadcast (as if it were sent
	 *            from device)
	 * @throws FileNotFoundException
	 *             this will not be an issue when we read data from device
	 */
	public void test_receivedMetaData(String xmlPath)
			throws FileNotFoundException {

		if (validateXMLSchema(schemaPath, xmlPath)) {
			// parse xml to suitable format for update
			ArrayList<GenericMetaDataModel> messages = new ArrayList<GenericMetaDataModel>(); // TODO
																		// not
																		// like
																		// this
			try {
				messages = convertXmlToModel(xmlPath);
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			for (GenericMetaDataModel message : messages) {
			UpdaterService
					.update(new TextMessage(message.convertToJSONString()));
			}
		} else {
			// inform device that they fcked up in regards to schema
			log.error("Everything is ruined, xml not valid");
		}
	}

	/***
	 * Creates model based on xml received from devices TODO refactoring
	 * 
	 * @return Model of data
	 */
	@SuppressWarnings("unchecked")
	private ArrayList<GenericMetaDataModel> convertXmlToModel(String xmlPath)
			throws Exception {
		
		ArrayList<GenericMetaDataModel> models = new ArrayList<GenericMetaDataModel>();
		GenericMetaDataModel genericMetaDataModel = new GenericMetaDataModel();
		LocationModel locationModel = new LocationModel();
		RotationModel rotationModel = new RotationModel();
		AccelerationModel accelerationModel = new AccelerationModel();
		String name = "";
		
		try {

			// First, create a new XMLInputFactory
			XMLInputFactory inputFactory = XMLInputFactory.newInstance();
			// Setup a new eventReader
			InputStream in = new FileInputStream(xmlPath);
			XMLEventReader eventReader = inputFactory.createXMLEventReader(in);
			// read the XML document
			// genericMetaDataModel = new GenericMetaDataModel();
			XMLEvent event;
			while (eventReader.hasNext()) {
				event = eventReader.nextEvent();

				if (event.isStartElement()) {
					StartElement startElement = event.asStartElement();
					// If we have an item element, we create a new item
					if (startElement.getName().getLocalPart() == ("logItem")) {
						Iterator<Attribute> attributes = startElement
								.getAttributes();
						Attribute attribute = attributes.next();

						genericMetaDataModel.setDate(attribute.getValue()
								.toString());
					}
					if (startElement.getName().getLocalPart() == ("name")) {
						event = eventReader.nextEvent();
						name = event.asCharacters().getData();
						if ("Rotation".equals(name)) {
							rotationModel.setName(name);
						}
						if ("Location".equals(name)) {
							locationModel.setName(name);
						}
						if ("Acceleration".equals(name)) {
							accelerationModel.setName(name);
						}
						//TODO acceleration and fault handling 
						continue;
					}

					if (startElement.getName().getLocalPart().equals("entry")) {
						
						event = eventReader.nextEvent();
						
						Iterator<Attribute> attributes = startElement
								.getAttributes();
						Attribute attribute = attributes.next();
						
						if ("speed".equals(attribute.getValue()))
							locationModel.setSpeed(Float.parseFloat(event
									.toString()));
						if ("force".equals(attribute.getValue()))
							accelerationModel.setForce(Float.parseFloat(event
								.toString()));
						if ("altitude".equals(attribute.getValue()))
							locationModel.setAltitude(Float.parseFloat(event
									.toString()));
						if ("longitude".equals(attribute.getValue()))
							locationModel.setLongitude(Float.parseFloat(event
									.toString()));
						if ("latitude".equals(attribute.getValue()))
							locationModel.setLatitude(Float.parseFloat(event
									.toString()));
						if ("accuracy".equals(attribute.getValue()))
							locationModel.setAccuracy(Float.parseFloat(event
									.toString()));
						if ("provider".equals(attribute.getValue()))
							locationModel.setProvider(event.toString());
						if ("azimuth".equals(attribute.getValue()))
							rotationModel.setAzimuth(Float.parseFloat(event
									.toString()));
						if ("pitch".equals(attribute.getValue()))
							rotationModel.setPitch(Float.parseFloat(event
									.toString()));
						if ("roll".equals(attribute.getValue()))
							rotationModel.setRoll(Float.parseFloat(event
									.toString()));
						
						continue;
					}
				}

				// If we reach the end of an item element, we add it to the list
				if (event.isEndElement()) {
					EndElement endElement = event.asEndElement();
					if (endElement.getName().getLocalPart() == ("logItem")) {
						if ("Location".equals(name)) {
							locationModel.setId(this.id.toString());
							locationModel.setDate(genericMetaDataModel.getDate());
							models.add(locationModel);
						} else if ("Rotation".equals(name)) {
							rotationModel.setId(this.id.toString());
							rotationModel.setDate(genericMetaDataModel.getDate());
							models.add(rotationModel);
						} else if ("Acceleration".equals(name)) {
							accelerationModel.setId(this.id.toString());
							accelerationModel.setDate(genericMetaDataModel.getDate());
							models.add(accelerationModel);
						}
					}
				}
			} 
		} catch (Exception e) {
			System.out.println(e.getStackTrace());
		}
		return models;
	}

	private static boolean validateXMLSchema(String xsdPath, String xmlPath) {

		try {
			SchemaFactory factory = SchemaFactory
					.newInstance(XMLConstants.W3C_XML_SCHEMA_NS_URI);
			Schema schema = factory.newSchema(new File(xsdPath));
			Validator validator = schema.newValidator();
			validator.validate(new StreamSource(new File(xmlPath)));
		} catch (IOException e) {
			System.out.println("Exception: " + e.getMessage()); // TODO, Log
																// errors
			return false;
		} catch (SAXException e) {
			System.out.println("Exception: " + e.getMessage());
			return false;
		}
		return true;
	}
}
