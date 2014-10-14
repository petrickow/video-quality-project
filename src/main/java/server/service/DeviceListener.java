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

import javax.xml.namespace.QName;
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

			ArrayList<GenericMetaDataModel> messages = new ArrayList<GenericMetaDataModel>();

			try {
				messages = convertXmlToModel(xml);
			} catch (Exception e) {
				log.error("Could not convert xml to model");
				e.printStackTrace();
				return;
			}

			for (GenericMetaDataModel message : messages) {

				if (message.getLast()) {
					storeMessage(message);
				} else {
					deviceMapping.remove(message.getId());
				}
			}

			// Send all json object as a list
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
				// Handle errors
				e.printStackTrace();
			} catch (JsonMappingException e) {
				e.printStackTrace();
			} catch (IOException e) {
				e.printStackTrace();
			}
		}

		return jsonString;
	}

	/***
	 * Creates model based on xml received from devices
	 * 
	 * @return Model of data
	 */
	@SuppressWarnings("unchecked")
	private static ArrayList<GenericMetaDataModel> convertXmlToModel(
			Document xml) throws Exception {

		ArrayList<GenericMetaDataModel> models = new ArrayList<GenericMetaDataModel>();

		// We will have to try to find a more elegant solution
		GenericMetaDataModel genericMetaDataModel = new GenericMetaDataModel();
		LocationModel locationModel = new LocationModel();
		RotationModel rotationModel = new RotationModel();
		AccelerationModel accelerationModel = new AccelerationModel();
		CameraModel cameraModel = new CameraModel();
		SnapshotModel snapshotModel = new SnapshotModel();
		BrightnessModel brightnessModel = new BrightnessModel();

		String name = "";
		Iterator<Attribute> attributes;
		Attribute attribute;

		try {

			// First, create a new XMLInputFactory
			XMLInputFactory inputFactory = XMLInputFactory.newInstance();
			// Setup a new eventReader
			XMLEventReader eventReader = inputFactory
					.createXMLEventReader(new StringBufferInputStream(
							RestController.getStringFromDocument(xml)));
			// read the XML document
			// genericMetaDataModel = new GenericMetaDataModel();
			XMLEvent event;
			while (eventReader.hasNext()) {
				event = eventReader.nextEvent();

				if (event.isStartElement()) {
					StartElement startElement = event.asStartElement();
					// If we have an item element, we create a new item
					switch (startElement.getName().getLocalPart()) {

					// appname skipped
					case "appName":
						break;

					case "logFile":
						Attribute atr = startElement.getAttributeByName(new QName("id"));
						genericMetaDataModel.setId(atr.getValue());
						break;

					case "camera":
						/*
						 * String res; // temporary storage for textual //
						 * representation of the resolution
						 * 
						 * // I think this will work TODO test it if
						 * (event.isStartElement() &&
						 * event.asStartElement().getName()
						 * .getLocalPart().equals("resolution")) { res =
						 * eventReader.nextEvent().asCharacters() .getData(); //
						 * TODO TODO TODO TODO !!! // int[] xy =
						 * extractResolution(res);
						 * 
						 * cameraModel.setX(0); cameraModel.setY(0); } else {
						 * log.warn(
						 * "Something fishy about the xml, could not find resolution after camera element"
						 * ); }
						 */

						break;
					case "resolution":
						event = eventReader.nextEvent();
						String resolution = event.asCharacters().getData();
						int[] xy = extractResolution(resolution);
						cameraModel.setX(xy[0]);
						cameraModel.setY(xy[1]);
						break;
					case "verticalViewAngle":
						event = eventReader.nextEvent();

						attributes = startElement.getAttributes();
						attribute = attributes.next();
						if (attribute.getValue().equals("degrees"))
							cameraModel.setVerticalViewAngle(Float
									.parseFloat(event.toString()));
						break;
					case "horizontalViewAngle":
						event = eventReader.nextEvent();
						attributes = startElement.getAttributes();
						attribute = attributes.next();
						if (attribute.getValue().equals("degrees"))
							cameraModel.setHorizontalViewAngle(Float
									.parseFloat(event.toString()));

						break;
					case "logItem":
						attributes = startElement.getAttributes();
						attribute = attributes.next();
						genericMetaDataModel.setDate(attribute.getValue()
								.toString());
						break;

					// ***** these are all within log items ****//
					case "name":
						event = eventReader.nextEvent();
						name = event.asCharacters().getData();
						if ("Rotation".equals(name)) {
							rotationModel.setName(name);
						} else if ("Location".equals(name)) {
							locationModel.setName(name);
						} else if ("Acceleration".equals(name)) {
							accelerationModel.setName(name);
						} else if ("Brightness".equals(name)) {
							brightnessModel.setName(name);
						} else if ("Snapshot".equals(name)) {
							snapshotModel.setName(name);
						}
						break;

					case "entry":
						event = eventReader.nextEvent();

						attributes = startElement.getAttributes();
						attribute = attributes.next();

						switch (attribute.getValue()) {
						

						case "speed":
							locationModel.setSpeed(Float.parseFloat(event
									.toString()));
							break;

						case "force":
							accelerationModel.setForce(Float.parseFloat(event
									.toString()));
							break;

						case "altitude":
							locationModel.setAltitude(Float.parseFloat(event
									.toString()));
							break;

						case "longitude":
							locationModel.setLongitude(Float.parseFloat(event
									.toString()));
							break;

						case "latitude":
							locationModel.setLatitude(Float.parseFloat(event
									.toString()));
							break;

						case "accuracy":
							locationModel.setAccuracy(Float.parseFloat(event
									.toString()));
							break;

						case "provider":
							locationModel.setProvider(event.toString());
							break;

						case "azimuth":
							rotationModel.setAzimuth(Float.parseFloat(event
									.toString()));
							break;

						case "pitch":
							rotationModel.setPitch(Float.parseFloat(event
									.toString()));
							break;

						case "roll":
							rotationModel.setRoll(Float.parseFloat(event
									.toString()));
							break;

						default:
							log.warn("unidentified entry in xml");
							break;
						}
						break;

					default:
						log.warn("Unknown start element");
						break;
					}
				}

				// If we reach the end of an item element, we extract generic
				// information from the generic meta data model and add it to
				// the list of models
				else if (event.isEndElement()) {
					EndElement endElement = event.asEndElement();

					// finishing up log items and camera
					switch (endElement.getName().getLocalPart()) {
					case "logItem":
						switch (name) {
						case "Location":
							locationModel.setId(genericMetaDataModel.getId());
							locationModel.setDate(genericMetaDataModel
									.getDate());
							models.add(locationModel);
							break;

						case "Rotation":
							rotationModel.setId(genericMetaDataModel.getId());
							rotationModel.setDate(genericMetaDataModel
									.getDate());
							models.add(rotationModel);
							break;

						case "Acceleration":
							accelerationModel.setId(genericMetaDataModel
									.getId());
							accelerationModel.setDate(genericMetaDataModel
									.getDate());
							models.add(accelerationModel);
							break;

						// TODO fill in the rest (brightness and snapshot
						case "Brightness":
							brightnessModel.setId(genericMetaDataModel.getId());
							brightnessModel.setDate(genericMetaDataModel
									.getDate());
							models.add(brightnessModel);
							break;

						case "Snapshot":
							snapshotModel.setId(genericMetaDataModel.getId());
							snapshotModel.setDate(genericMetaDataModel
									.getDate());
							models.add(snapshotModel);
							break;

						default:
							log.warn("\"" + endElement.getName()
									+ "\" has not been modeled yet");
						}
						break;

					case "camera":
						cameraModel.setId(genericMetaDataModel.getId());
						cameraModel.setDate(genericMetaDataModel.getDate());
						models.add(cameraModel);
						break;
					default:
						// just keep on truckin' for now, handle as error TODO
					}
				}
			}
		} catch (Exception e) {
			log.error(e.getMessage()
					+ " "
					+ e.getStackTrace()
					+ "Great gooogelymooogley in the convert Xml to Model method");
		}

		return models;
	}

	private static int[] extractResolution(String resolution) {
		// parsing resolution
		String stringArray[] = new String[2];
		stringArray = resolution.split("x");
		stringArray[1].replace("x", "");

		// returing resolution as int
		int res[] = new int[2];
		res[0] = Integer.parseInt(stringArray[0]);
		res[1] = Integer.parseInt(stringArray[1]);
		return res;
	}

	private static boolean validateXMLSchema(String xsdPath, Document xml) {
		try {
			SchemaFactory factory = SchemaFactory
					.newInstance(XMLConstants.W3C_XML_SCHEMA_NS_URI);
			Schema schema = factory.newSchema(new File(xsdPath));
			Validator validator = schema.newValidator();
			validator.validate(new StreamSource(new StringBufferInputStream(
					RestController.getStringFromDocument(xml))));
		} catch (IOException e) {
			log.error("Exception: " + e.getMessage());
			return false;
		} catch (SAXException e) {
			log.error("\n\nB_UhU:\nException: " + e.getMessage());
			return false;
		}
		return true;
	}
}
