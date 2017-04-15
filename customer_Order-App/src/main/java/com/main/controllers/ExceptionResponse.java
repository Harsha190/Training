package com.main.controllers;

import java.util.Date;

import org.springframework.stereotype.Component;

@Component
public class ExceptionResponse {
	
	private int code;
	private String description;
	private Date timeStamp;
	
	public Date getTimeStamp() {
		return timeStamp;
	}
	public void setTimeStamp(Date timeStamp) {
		this.timeStamp = timeStamp;
	}
	public int getCode() {
		return code;
	}
	public void setCode(int code) {
		this.code = code;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	
	

}
