package server;

import server.model.*;

import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.UUID;

import javax.xml.stream.FactoryConfigurationError;
import javax.xml.stream.XMLEventReader;
import javax.xml.stream.XMLInputFactory;
import javax.xml.stream.XMLStreamException;
import javax.xml.stream.XMLStreamReader;
import javax.xml.stream.XMLStreamWriter;
import javax.xml.transform.Result;
import javax.xml.transform.Source;
import javax.xml.transform.TransformerConfigurationException;
import javax.xml.transform.TransformerException;
import javax.xml.transform.TransformerFactory;
import javax.xml.transform.TransformerFactoryConfigurationError;
import javax.xml.transform.stax.StAXResult;
import javax.xml.transform.stax.StAXSource;
import javax.xml.transform.stream.StreamSource;
import javax.xml.validation.Validator;
import javax.xml.XMLConstants;
import javax.xml.validation.Schema;
import javax.xml.validation.SchemaFactory;

import org.springframework.web.socket.TextMessage;
import org.xml.sax.SAXException;

import de.odysseus.staxon.json.JsonXMLConfig;
import de.odysseus.staxon.json.JsonXMLConfigBuilder;
import de.odysseus.staxon.json.JsonXMLOutputFactory;

/***
 * Handles incoming meta data from devices recording by validating XML and passes
 * the information to the UpdaterService 
 * */
public class DeviceListener {
	
	// Note to self: schemapath, device-list with id, logger 
	String schemaPath;
	UUID id;
	
	/***
	 * When receiving a xml from device, the xml is converted to apropriate format and 
	 * broadcasted to web clients using UpdaterService class
	 * @param xmsPath is t
	 * he path to schema used for validation
	 */
	public DeviceListener(String xmsPath, UUID id) { 
		this.schemaPath = xmsPath;
		this.id = id;
	}
	
	
	/*** 
	 * This exicst for testing purposes
	 * @param xmlPath absolute path to xml you want to broadcast (as if it were sent from device)
	 * @throws FileNotFoundException this will not be an issue when we read data from device
	 */
	public void test_receivedMetaData(String xmlPath) throws FileNotFoundException {
		
		if (validateXMLSchema(schemaPath, xmlPath)) {
			//parse xml to suitable format for update
			GenericMetaDataModel message = new GenericMetaDataModel(); // TODO not like this
			try {
				message = convertXmlToModel(xmlPath);
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			
			
			UpdaterService.update(new TextMessage(message.convertToJSONString()));
		} else {
			//inform device that they fcked up in regards to schema
			System.out.println("Everything is ruined");
		}
	}
	
	/***
	 * TODO This is more or less copy-pasted from https://github.com/beckchr/staxon
	 * @param xmlPath TODO, change to the file received from device
	 * @return JSON-valid string for use in text message to clients
	 */
	private GenericMetaDataModel convertXmlToModel(String xmlPath) throws Exception{
		
		// check name
		// if location
		// 		create location model
		// if rotation
		// 		create rotation model
		// add uuid.toString to model
		
		// return GenericMetaDataModel
		return new RotationModel();

	}
	
	private static boolean validateXMLSchema(String xsdPath, String xmlPath){
        
        try {
            SchemaFactory factory = 
                    SchemaFactory.newInstance(XMLConstants.W3C_XML_SCHEMA_NS_URI);
            Schema schema = factory.newSchema(new File(xsdPath));
            Validator validator = schema.newValidator();
            validator.validate(new StreamSource(new File(xmlPath)));
        } catch (IOException e ) {
            System.out.println("Exception: "+e.getMessage()); // TODO, Log errors
            return false;
        } catch (SAXException e) {
            System.out.println("Exception: "+e.getMessage());
            return false;
        }
        return true;
    }
}
