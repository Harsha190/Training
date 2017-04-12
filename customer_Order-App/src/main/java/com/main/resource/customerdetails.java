package com.main.resource;


import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class customerdetails {
	
	public customerdetails(){
		
	}
	
	public customerdetails(String id, String name, String gender, String email){
		super();
		this.id = id;
		this.name = name;
		this.gender = gender;
		this.email = email;
	}
	
	@Id
	private String id;
	private String name;
	private String gender;
	private String email;
	
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}	

}
