package com.main.repositories;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.main.resource.Orders;
import com.main.resource.customerdetails;

public interface CustomersRepository extends MongoRepository<customerdetails, String> {

	customerdetails findById(String id);

	customerdetails findByPassword(String password);
	
	

}
