package com.main;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
import org.springframework.web.servlet.DispatcherServlet;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

@SpringBootApplication
@ComponentScan(basePackages = {"com.main.controllers", "com.main.service"})
@EntityScan("com.main.resource")
@EnableMongoRepositories("com.main.repositories")
@EnableWebMvc
public class CustomerOrderAppApplication {

	public static void main(String[] args) {
		SpringApplication.run(CustomerOrderAppApplication.class, args);
		
//		DispatcherServlet dispatcherServlet = (DispatcherServlet)ctx.getBean("dispatcherServlet");
//        dispatcherServlet.setThrowExceptionIfNoHandlerFound(true);
	}
}
