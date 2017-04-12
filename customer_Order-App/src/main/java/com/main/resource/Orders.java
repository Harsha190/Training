package com.main.resource;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="orders")
public class Orders {
	
	
	@Id
	private String id;
	@DBRef
	private customerdetails customerdetails;
	private String item;
	private String type;
	private String price;
	private String customerdetailsId;
	
	public Orders() {
		
	}
	
	
	public Orders(String id, String item, String type, String price, String customerdetailsId) {
		super();
		this.id = id;
		this.item = item;
		this.type = type;
		this.price = price;
		this.customerdetails = new customerdetails(customerdetailsId,"","");
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


	
	
	

}
