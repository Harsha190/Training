package com.main.resource;

import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.format.annotation.DateTimeFormat.ISO;

@Document(collection="orders")
public class Orders {
	
	
	@Id
	private String id;
	private String item;
	private String type;
	private String price;
	private String status;
	
	@DateTimeFormat(iso= ISO.DATE_TIME)
	private Date orderTime;
	
	private String customerdetailsId;
	
	public Orders() {
		
	}
	
	
	public Orders(String id, String item, String type, String price, String status, String customerdetailsId) {
		super();
		this.id = id;
		this.item = item;
		this.type = type;
		this.price = price;
		orderTime = new Date();
		this.status = status;
		this.customerdetailsId = customerdetailsId;
	}
	
	
	
	public String getItem() {
		return item;
	}
	public void setItem(String item) {
		this.item = item;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public String getPrice() {
		return price;
	}
	public void setPrice(String price) {
		this.price = price;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}


	public String getCustomerdetailsId() {
		return customerdetailsId;
	}


	public void setCustomerdetailsId(String customerdetailsId) {
		this.customerdetailsId = customerdetailsId;
	}


	public Date getOrderTime() {
		return orderTime;
	}


	public void setOrderTime(Date orderTime) {
		this.orderTime = orderTime;
	}	

}
