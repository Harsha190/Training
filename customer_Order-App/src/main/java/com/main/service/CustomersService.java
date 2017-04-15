package com.main.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.main.repositories.CustomersRepository;
import com.main.resource.customerdetails;

@Service
public class CustomersService {
	
	@Autowired
	CustomersRepository customersRepository;
	
	public List<customerdetails> getAllCustomers(){
		return customersRepository.findAll();
	}
	
	
	public customerdetails getCustomer(String id){
		return customersRepository.findOne(id);
	}
	
	public customerdetails getById(String id){
		return customersRepository.findById(id);
	}
	
	public customerdetails getByPassword(String password){
		return customersRepository.findByPassword(password);
	}

}
