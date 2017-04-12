package com.main.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;

import com.main.repositories.OrdersRepository;
import com.main.resource.Orders;

@Service
public class OrderService {

	@Autowired
	OrdersRepository ordersRepository;
	
	MongoOperations mongoOperation;
	
	public List<Orders> getAllOrders(String customerdetailsId){
		Query query4 = new Query();
		query4.addCriteria(Criteria.where("customerdetailsId").is(customerdetailsId));

		List<Orders> userTest4 = mongoOperation.find(query4, Orders.class);
		System.out.println("query4 - " + query4.toString());

		for (Orders user : userTest4) {
			System.out.println("userTest4 - " + user);
		}
		
		List<Orders> orders = new ArrayList<>();
		ordersRepository.findByCustomerdetailsId(customerdetailsId)
		.forEach(orders::add);
		return orders;
	}
	
}
