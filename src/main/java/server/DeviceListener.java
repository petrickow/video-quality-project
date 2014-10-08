package server;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;

import javax.xml.stream.XMLEventReader;
import javax.xml.stream.XMLInputFactory;
import javax.xml.stream.XMLStreamException;
import javax.xml.transform.stream.StreamSource;
import javax.xml.validation.Validator;
import javax.xml.XMLConstants;
import javax.xml.validation.Schema;
import javax.xml.validation.SchemaFactory;

import org.xml.sax.SAXException;

/***
 * Handles incoming meta data from devices recording by validating XML and passes
 * the information to the UpdaterService 
 * */
public class DeviceListener {
	
	
	String schemaPath;
	
	/***
	 * When receiving a xml from device, the xml is converted to apropriate format and 
	 * broadcasted to web clients using UpdaterService class
	 * @param xmsPath is the path to schema used for validation
	 */
	public DeviceListener(String xmsPath) { 
		this.schemaPath = xmsPath;
	}
	
	
	/*** 
	 * This exicst for testing purposes
	 * @param xmlPath absolute path to xml you want to broadcast (as if it were sent from device)
	 * @throws FileNotFoundException this will not be an issue when we read data from device
	 */
	public void test_receivedMetaData(String xmlPath) throws FileNotFoundException {
		 
		if (validateXMLSchema(schemaPath, xmlPath)) {
			//parse xml to suitable format for update
			String message = convertXml(xmlPath);
		} else {
			//inform device that they fcked up in regards to schema
			System.out.println("Everything is ruined");
		}
	}
	
	/***
	 * @param xmlPath TODO, change to the file received from device
	 * @return JSON-valid string for use in text message to clients
	 * @throws FileNotFoundException 
	 */
	private String convertXml(String xmlPath) throws FileNotFoundException {
		String message = new String();
		
		XMLInputFactory inputFactory = XMLInputFactory.newInstance();
		InputStream in = new FileInputStream(xmlPath);	
		 
		//Read the file and send it (dumb forwarding)
		try {
			XMLEventReader eventReader = inputFactory.createXMLEventReader(in);
			while (eventReader.hasNext()) {
				System.out.println("\"" + eventReader.nextTag() + "\"");
			}

		} catch (XMLStreamException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return message;
	}
	
	private static boolean validateXMLSchema(String xsdPath, String xmlPath){
        
        try {
            SchemaFactory factory = 
                    SchemaFactory.newInstance(XMLConstants.W3C_XML_SCHEMA_NS_URI);
            Schema schema = factory.newSchema(new File(xsdPath));
            Validator validator = schema.newValidator();
            validator.validate(new StreamSource(new File(xmlPath)));
        } catch (IOException e ) {
            System.out.println("Exception: "+e.getMessage());
            return false;
        } catch (SAXException e) {
            System.out.println("Exception: "+e.getMessage());
            return false;
        }
        return true;
    }
}
