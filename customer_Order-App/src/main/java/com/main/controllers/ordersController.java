package com.main.controllers;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.main.resource.Orders;
import com.main.resource.customerdetails;
import com.main.service.OrderService;

@RestController
@RequestMapping("/orders")
public class ordersController {

	@Autowired
	OrderService orderService;
	
	@RequestMapping("/all")
	public List<Orders> getAllOrders(){
		return orderService.getAllOrders();
		
	}
	
	@RequestMapping("/order")
	public ResponseEntity<?> getOrder(@RequestParam(value="id") 
	@RequestHeader(value="id")
	String id){
		Orders order = orderService.getOrder(id);
		if(order==null){
			return new ResponseEntity(new CustomErrorType(new Date(), HttpStatus.NOT_FOUND.value(),"Order with id not found"),HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<Orders>(order,HttpStatus.OK);
	}
	
}
