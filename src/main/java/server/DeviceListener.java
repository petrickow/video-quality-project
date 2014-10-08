package server;

import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;

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
			String message = new String();
			try {
				message = convertXml(xmlPath);
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			
			
			UpdaterService.update(new TextMessage(message));
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
	private String convertXml(String xmlPath) throws Exception{
		
		
		ByteArrayOutputStream output = new ByteArrayOutputStream();
		InputStream input = new FileInputStream(xmlPath);	
        
        /*
         * If we want to insert JSON array boundaries for multiple elements,
         * we need to set the <code>autoArray</code> property.
         * If our XML source was decorated with <code>&lt;?xml-multiple?&gt;</code>
         * processing instructions, we'd set the <code>multiplePI</code>
         * property instead.
         * With the <code>autoPrimitive</code> property set, element text gets
         * automatically converted to JSON primitives (number, boolean, null).
         */
        JsonXMLConfig config = new JsonXMLConfigBuilder()
            .autoArray(true)
            .autoPrimitive(true)
            .prettyPrint(true)
            .build();
        try {
            /*
             * Create source (XML).
             */
            XMLStreamReader reader = XMLInputFactory.newInstance().createXMLStreamReader(input);
            Source source = new StAXSource(reader);

            /*
             * Create result (JSON).
             */
            XMLStreamWriter writer = new JsonXMLOutputFactory(config).createXMLStreamWriter(output);
            Result result = new StAXResult(writer);

            /*
             * Copy source to result via "identity transform".
             */
             TransformerFactory.newInstance().newTransformer().transform(source, result);
        } finally {
            /*
             * As per StAX specification, XMLStreamReader/Writer.close() doesn't close
             * the underlying stream.
             */
            output.close();
            input.close();
        }
		return output.toString();
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
