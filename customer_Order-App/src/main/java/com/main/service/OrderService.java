package com.main.service;

import java.util.ArrayList;
import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import com.main.repositories.OrdersRepository;
import com.main.resource.Orders;

@Service
public class OrderService {

	@Autowired
	OrdersRepository ordersRepository;
	
	@Autowired
	private MongoTemplate mongotemplate;
	
	
	public List<Orders> getAllOrders(String customerdetailsId){
		
		Criteria criteria = Criteria.where("customerdetailsId").is(new ObjectId(customerdetailsId));
		return mongotemplate.find(Query.query(criteria),Orders.class);
		
//		List<Orders> orders = new ArrayList<>();
//		ordersRepository.findByCustomerdetailsId(new ObjectId(customerdetailsId))
//		.forEach(orders::add);
//		return orders;
	}
	
	public List<Orders> getAllOrders(){
		return ordersRepository.findAll();	
	}
	
	public Orders getOrder(@PathVariable String id){
		return ordersRepository.findOne(id);
	}
	
}
