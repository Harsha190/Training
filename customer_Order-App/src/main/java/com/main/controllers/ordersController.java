package com.main.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.main.resource.Orders;
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
	public Orders getOrder(@RequestParam(value="id") 
	@RequestHeader(value="id")
	String id){
		System.out.println("Order::"+id);
		return orderService.getOrder(id);
	}
	
}
