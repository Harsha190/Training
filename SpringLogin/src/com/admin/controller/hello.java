package com.admin.controller;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping(value="sample")
public class hello {
	
	@RequestMapping(value="/page", method=RequestMethod.POST)
	private void view(HttpServletRequest request,HttpServletResponse response){
		String name = request.getParameter("username");
		String pwd = request.getParameter("passwd");
		
		
		if(name.equals("harsha")&&pwd.equals("123")){
			try {
				response.getWriter().write("Hello!! Welcome to Spring.");
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
		else{
			try {
				response.getWriter().write("Login Failed.");
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
	}
	
	
//	public ModelAndView getPage(){
//		ModelAndView view = new ModelAndView("hello");
//		return view;
//	}
}
