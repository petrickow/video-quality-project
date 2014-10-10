package server.service;

import server.controller.RestController;
import server.model.*;

import org.w3c.dom.Document;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.io.StringBufferInputStream;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.concurrent.ConcurrentHashMap;

import javax.xml.stream.XMLEventReader;
import javax.xml.stream.XMLInputFactory;
import javax.xml.stream.events.Attribute;
import javax.xml.stream.events.EndElement;
import javax.xml.stream.events.StartElement;
import javax.xml.stream.events.XMLEvent;
import javax.xml.transform.dom.DOMSource;
import javax.xml.transform.stream.StreamSource;
import javax.xml.validation.Validator;
import javax.xml.XMLConstants;
import javax.xml.validation.Schema;
import javax.xml.validation.SchemaFactory;

import org.springframework.web.socket.TextMessage;
import org.xml.sax.SAXException;
import org.apache.log4j.Logger;

import com.fasterxml.jackson.core.JsonGenerationException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

/***
 * Handles incoming meta data from devices recording by validating XML and
 * passes the information to the UpdaterService
 * */
public class DeviceListener {

	// Note to self: schemapath, device-list with id, logger
	final public static String schemaPath = System.getProperty("user.dir")
			+ "/src/main/resources/testXML/schema.xsd";
	static ConcurrentHashMap<String, ArrayList<GenericMetaDataModel>> deviceMapping = new ConcurrentHashMap<String, ArrayList<GenericMetaDataModel>>();
	private static Logger log = Logger.getLogger(DeviceListener.class);

	/***
	 * This exicst for testing purposes
	 * 
	 * @param xmlPath
	 *            absolute path to xml you want to broadcast (as if it were sent
	 *            from device)
	 * @throws FileNotFoundException
	 *             this will not be an issue when we read data from device
	 */
	public static void restReceivedMetaData(Document xml) {

		if (validateXMLSchema(schemaPath, xml)) {

			ArrayList<GenericMetaDataModel> messages = new ArrayList<GenericMetaDataModel>(); // TODO

			try {

				messages = convertXmlToModel(xml);
			} catch (Exception e) {
				log.error("Could not convert xml to model");
				e.printStackTrace();
			}

			// temporary solution
			for (GenericMetaDataModel message : messages) {

				if (!isStopMessage(message)) {
					storeMessage(message);
				} else {
					deviceMapping.remove(message.getId());
					// inform frontend or just pass the message along, they'll
					// knwo
					// what to do?
				}
			}
			// Collect all json object in a list
			UpdaterService.update(new TextMessage(
					generateJsonListString(messages)));

		} else {
			log.error("Everything is ruined, xml not valid");
		}
	}

	/**
	 * Stores messages received from devices for historical data. Is removed
	 * when device disconnects
	 * 
	 * @param message
	 *            - generic metadata model to be stored
	 */
	private static void storeMessage(GenericMetaDataModel message) {
		if (deviceMapping.contains(message.getId())) {
			deviceMapping.get(message.getId()).add(message);
		} else {
			ArrayList<GenericMetaDataModel> deviceMessages = new ArrayList<GenericMetaDataModel>();
			deviceMessages.add(message);
			deviceMapping.put(message.getId(), deviceMessages);
		}
	}

	/**
	 * Collect all json objects from one logfile into a list of json objects as
	 * a string in order to send to webclients
	 * 
	 * @param messages
	 *            A list of meta data models
	 * @return the models mapped as json values
	 */
	private static String generateJsonListString(
			ArrayList<GenericMetaDataModel> messages) {

		ObjectMapper mapper = new ObjectMapper(); // can reuse, share globally
		String jsonString = "";
		if (messages.size() > 0) {
			try {
				jsonString = mapper.writeValueAsString(messages);
			} catch (JsonGenerationException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			} catch (JsonMappingException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}

		return jsonString;
	}

	/**
	 * Checks if received message is a stop message from device
	 * 
	 * @param message
	 *            - the message in question
	 * @return false if not a stop message
	 */
	private static boolean isStopMessage(GenericMetaDataModel message) {
		// TODO
		return false;
	}

	/***
	 * Creates model based on xml received from devices TODO refactoring
	 * 
	 * @return Model of data
	 */
	@SuppressWarnings("unchecked")
	private static ArrayList<GenericMetaDataModel> convertXmlToModel(
			Document xml) throws Exception {

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
			XMLEventReader eventReader = inputFactory
					.createXMLEventReader(new StringBufferInputStream(RestController
							.getStringFromDocument(xml)));
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
					} else if (startElement.getName().getLocalPart() == ("name")) {
						event = eventReader.nextEvent();
						name = event.asCharacters().getData();
						if ("Rotation".equals(name)) {
							rotationModel.setName(name);
						} else if ("Location".equals(name)) {
							locationModel.setName(name);
						} else if ("Acceleration".equals(name)) {
							accelerationModel.setName(name);
						}
						// TODO acceleration and fault handling
						continue;
					}

					else if (startElement.getName().getLocalPart()
							.equals("entry")) {

						event = eventReader.nextEvent();

						Iterator<Attribute> attributes = startElement
								.getAttributes();
						Attribute attribute = attributes.next();
						if ("id".equals(attribute.getValue()))
							genericMetaDataModel.setId(event
									.toString());
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
				else if (event.isEndElement()) {
					EndElement endElement = event.asEndElement();
					if (endElement.getName().getLocalPart() == ("logItem")) {
						if ("Location".equals(name)) {
							locationModel.setId(genericMetaDataModel.getId());
							locationModel.setDate(genericMetaDataModel
									.getDate());
							models.add(locationModel);
						} else if ("Rotation".equals(name)) {
							rotationModel.setId(genericMetaDataModel.getId());
							rotationModel.setDate(genericMetaDataModel
									.getDate());
							models.add(rotationModel);
						} else if ("Acceleration".equals(name)) {
							accelerationModel.setId(genericMetaDataModel
									.getId());
							accelerationModel.setDate(genericMetaDataModel
									.getDate());
							models.add(accelerationModel);
						}
					}
				}
			}
		} catch (Exception e) {
			log.error(e.getMessage() + " " + e.getStackTrace() + "Great gooogelymooogley");
		}
		return models;
	}

	private static boolean validateXMLSchema(String xsdPath, Document xml) {
		try {
			SchemaFactory factory = SchemaFactory
					.newInstance(XMLConstants.W3C_XML_SCHEMA_NS_URI);
			Schema schema = factory.newSchema(new File(xsdPath));
			Validator validator = schema.newValidator();
			validator.validate(new StreamSource(new StringBufferInputStream(RestController
					.getStringFromDocument(xml))));
		} catch (IOException e) {
			log.error("Exception: " + e.getMessage()); // TODO, Log
			return false;
		} catch (SAXException e) {
			log.error("\n\nB_UhU:\nException: " + e.getMessage());
			return false;
		}
		return true;
	}

}
