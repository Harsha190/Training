package com.main.controllers;

import java.util.Date;
import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.main.resource.Orders;
import com.main.resource.customerdetails;
import com.main.service.CustomersService;
import com.main.service.OrderService;

@RestController
@RequestMapping("/customers")
public class customerController {
	
	@Autowired
	CustomersService customerService;
	@Autowired
	private MongoTemplate mongotemplate;
		
	@Autowired
	OrderService orderService;
	
	
	@RequestMapping("/all")
	public ResponseEntity<List<customerdetails>> getAllCustomers(){
		List<customerdetails> users = customerService.getAllCustomers();
        if (users.isEmpty()) {
            return new ResponseEntity(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<List<customerdetails>>(users, HttpStatus.OK);
	}
	
//	@RequestMapping("/{id}")
//	public ResponseEntity<?> getCustomerOne(@PathVariable(value="id") 
//	String id){
//		
//		customerdetails custd = customerService.getCustomer(id);
//		if(custd==null){
//			return new ResponseEntity(new CustomErrorType(new Date(), HttpStatus.NOT_FOUND.value(),"User with id not found"),HttpStatus.NOT_FOUND);
//		}
//		return new ResponseEntity<customerdetails>(custd,HttpStatus.OK);
//	}
	
	
	@RequestMapping("/login")
	public ResponseEntity<?> getCustomerInfo(@RequestParam(value="id") String id, @RequestParam(value="password")
	String password){
		customerdetails custid = customerService.getCustomer(id);
		if(custid==null){
			return new ResponseEntity(new CustomErrorType(new Date(), HttpStatus.NOT_FOUND.value(),"User with id not found"),HttpStatus.NOT_FOUND);
		}
		customerdetails custd = customerService.getById(id);
		if(custd.getPassword().equals(password)){
			return new ResponseEntity<customerdetails>(custd,HttpStatus.OK);
		}
		return new ResponseEntity(new CustomErrorType(new Date(), HttpStatus.NOT_FOUND.value(),"Invalid Credentials"),HttpStatus.NOT_FOUND);
	}
	
	
	
	@RequestMapping("/customer")
	public ResponseEntity<?> getCustomer(@RequestParam(value="id") 
	@RequestHeader(value="id") 
	String id){
		customerdetails custd = customerService.getCustomer(id);
		if(custd==null){
			return new ResponseEntity(new CustomErrorType(new Date(), HttpStatus.NOT_FOUND.value(),"User with id not found"),HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<customerdetails>(custd,HttpStatus.OK);
	}
	
	@RequestMapping("/{customerdetailsId}/orders")
	public ResponseEntity<List<Orders>> getAllOrdersByCustomer(@PathVariable(value="customerdetailsId") String customerdetailsId){	
		List<Orders> allOrders =  orderService.getAllOrders(customerdetailsId);
		if (allOrders.isEmpty()) {
            return new ResponseEntity(new CustomErrorType(new Date(), HttpStatus.NOT_FOUND.value(),"Page Not Found"),HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<List<Orders>>(allOrders, HttpStatus.OK);
	}
	
	
}
