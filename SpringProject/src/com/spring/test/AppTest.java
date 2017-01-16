package com.spring.test;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.FileSystemXmlApplicationContext;

import com.spring.test.*;

public class AppTest {

	public static void main(String[] args) {
		ApplicationContext context = new FileSystemXmlApplicationContext("spring.xml");
		
		HelloWorld he = (HelloWorld) context.getBean("helloWorld");
		System.out.println(he.getMessage());
	}

}
