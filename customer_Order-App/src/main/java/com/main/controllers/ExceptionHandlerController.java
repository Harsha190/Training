package com.main.controllers;

import java.net.URI;
import java.util.Date;

import org.springframework.http.HttpStatus;
import org.springframework.messaging.support.ErrorMessage;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.servlet.NoHandlerFoundException;
import org.springframework.web.util.UrlPathHelper;

@ControllerAdvice
public class ExceptionHandlerController{
	
	  @ExceptionHandler(NoHandlerFoundException.class)
	    @ResponseStatus(value= HttpStatus.NOT_FOUND)
	    @ResponseBody
	    public ExceptionResponse requestHandler(){
		  ExceptionResponse eR = new ExceptionResponse();
		  eR.setTimeStamp(new Date());
		  eR.setCode(HttpStatus.NOT_FOUND.value());
		  eR.setDescription("Page Not Found");
		  return eR;
	  }

}
