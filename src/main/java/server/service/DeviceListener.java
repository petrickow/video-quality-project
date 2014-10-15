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
import com.fasterxml.jackson.core.JsonProcessingException;
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
	private static ConcurrentHashMap<String, ArrayList<GenericMetaDataModel>> deviceMapping = new ConcurrentHashMap<String, ArrayList<GenericMetaDataModel>>();
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

				if (!message.getLast() || !message.getName().equals("Snapshot")) {
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
		if (deviceMapping.containsKey(message.getId())) {
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
						Attribute atr = startElement
								.getAttributeByName(new QName("id"));
						genericMetaDataModel.setId(atr.getValue());
						break;

					/*
					 * == camera this can be extracted into a method==
					 */
					case "camera":
						cameraModel.setName("Camera");
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
						cameraModel.setVerticalViewAngle(Float.parseFloat(event
								.toString()));
						break;

					case "horizontalViewAngle":
						event = eventReader.nextEvent();
						cameraModel.setHorizontalViewAngle(Float
								.parseFloat(event.toString()));
						break;
					/* == end camera == */

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
						attributes = startElement.getAttributes();
						attribute = attributes.next();
						event = eventReader.nextEvent();

						switch (attribute.getValue()) {
						case "base64jpeg":
							String encodedImage = "";
							while (!event.isEndElement()) {
								encodedImage += event.toString().trim()
										.replaceAll("\\t", "")
										.replaceAll("\\n", "");
								event = eventReader.nextEvent();
							}
							snapshotModel.setSnapshot(encodedImage);
							System.out.println("This is "
									+ genericMetaDataModel.getId()
									+ " Image is dark? "
									+ AnalysisService.ratePicture(snapshotModel
											.getSnapshot()));
							break;

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
						case "lux":
							brightnessModel.setLux(Float.parseFloat(event
									.toString()));
							break;
						default:
							log.warn("Unknown attribute in entry");
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
					+ " "
					+ e.getCause()
					+ " "
					+ e.toString()
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

	public static String createJsonFromHistory() throws JsonProcessingException {
		String jsonString = "";
		ObjectMapper mapper = new ObjectMapper();
		int logitem = 0;
		for (String key : deviceMapping.keySet()) { // TODO change this to
													// datetime or some other
													// descriptive entry?
			jsonString += ", \"logitem" + logitem++ + "\":";
			ArrayList<GenericMetaDataModel> list = deviceMapping.get(key);
			jsonString += mapper.writeValueAsString(list);
		}

		return jsonString + "}";
	}
}
