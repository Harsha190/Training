package com.main.resource;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class customerdetails {
	
	public customerdetails(){
		
	}
	
	public customerdetails(String id, String name, String gender){
		super();
		this.id = id;
		this.name = name;
		this.gender = gender;
	}
	
	@Id
	private String id;
	private String name;
	private String gender;
	
	
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

}
