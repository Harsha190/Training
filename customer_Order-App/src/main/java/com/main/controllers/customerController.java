package com.main.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.main.repositories.CustomersRepository;
import com.main.repositories.OrdersRepository;
import com.main.resource.Orders;
import com.main.resource.customerdetails;
import com.main.service.OrderService;

@RestController
public class customerController {
	
	@Autowired
	CustomersRepository customersRepository;
	
	@Autowired
	OrdersRepository ordersRepository;
	
	@Autowired
	OrderService orderService;
	

	@RequestMapping("/hio")
	public String sayHi(){
		return "Hello MongoDB!!!";
	}
	
	@RequestMapping("/customers")
	public List<customerdetails> getAllCustomers(){
		return customersRepository.findAll();
	}
	
	
	@RequestMapping("/customers/{id}")
	public customerdetails getCustomer(@PathVariable String id){
		return customersRepository.findOne(id);
	}
	
	@RequestMapping("/customers/orders")
	public List<Orders> getAllOrders(){
		return ordersRepository.findAll();	
	}
	
	@RequestMapping("/customers/{customerdetailsId}/orders")
	public List<Orders> getAllOrdersByCustomer(@PathVariable String customerdetailsId){	
		return orderService.getAllOrders(customerdetailsId);
	}
	
	@RequestMapping("/orders/{id}")
	public Orders getOrder(@PathVariable String id){
		return ordersRepository.findOne(id);
	}
	
}
