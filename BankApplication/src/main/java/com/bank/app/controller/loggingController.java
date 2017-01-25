package com.bank.app.controller;

import java.io.IOException;
import java.util.List;
import java.util.Random;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.hibernate.Query;
import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.bank.app.config.HibernateConfiguration;
import com.bank.app.dao.CustomerInfoDao;
import com.bank.app.model.CustomerInfo;

@Controller
public class loggingController {
	
	@Autowired
	CustomerInfoDao customerInfoDao;

	@RequestMapping(value="/login", method=RequestMethod.GET)
	private String loginPage(HttpServletRequest request, HttpServletResponse response){
		return "Login";
	}
		
	@RequestMapping(value="/signin", method=RequestMethod.POST)
	private String signinContent(HttpServletRequest request, HttpServletResponse response) 
			throws ServletException, IOException 
        {
		System.out.println("signIn");
		String emailId = request.getParameter("email");
		String password = request.getParameter("password");
		
		CustomerInfo stu = new CustomerInfo();
		
		Session session = HibernateConfiguration.getSessionFactory();
		session.beginTransaction();
		Query query = session.getNamedQuery("customerDetails");
		query.setParameter(0, emailId);
		query.setParameter(1, password);
		
		List<CustomerInfo> customers = (List<CustomerInfo>) query.list();
		session.getTransaction().commit();
		
		if(customers != null && (customers.size()>0)){
			return "app/HomePage";
		}
		return "app/SignInFailedPage";
	}
	
	@RequestMapping(value="/signup", method=RequestMethod.POST)
	private String signupContent(HttpServletRequest request, HttpServletResponse response){
		String firstname = request.getParameter("firstname");
		String lastname = request.getParameter("lastname");
		String emailId = request.getParameter("email");
		String password = request.getParameter("password");
		
		CustomerInfo customer = new CustomerInfo();
		customer.setFirst_name(firstname);
		customer.setLast_name(lastname);
		customer.setEmail_id(emailId);
		customer.setPassword(password);
		
		Random rand = new Random();
		int ac_no = 1000 + rand.nextInt(10000 - 1000);
		customer.setAccount_number(ac_no);
		
		customerInfoDao.save(customer);
		
		return "app/HomePage";
	}
}
