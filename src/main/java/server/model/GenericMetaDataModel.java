package server.model;

import java.io.IOException;
import java.util.Date;

import com.fasterxml.jackson.core.JsonGenerationException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

public class GenericMetaDataModel {
	private Date date;
	private String id;
	private String name;
	
	ObjectMapper mapper = new ObjectMapper(); // can reuse, share globally

	public Date getDate() {	return date; }
	public void setDate(Date date) { this.date = date; }

	public String getId() {	return id; }
	public void setId(String id) { this.id = id; }

	public String getName() { return name; }
	public void setName(String name) { this.name = name; }

	public String convertToJSONString() {
		String jsonString = "";
		try {
			jsonString = mapper.writeValueAsString(this);
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
		return jsonString;
	}
}
