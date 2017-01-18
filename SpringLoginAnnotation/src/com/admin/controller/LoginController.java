package com.admin.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.admin.dao.StudentDao;
import com.admin.model.Student;

@Controller
public class LoginController {

	@Autowired
	StudentDao studentdao;
	
	@RequestMapping("/login")
	public ModelAndView login(HttpServletRequest request, HttpServletResponse response){
		String name = request.getParameter("username");
		String pwd = request.getParameter("passwd");
		ModelAndView view = new ModelAndView();
		
		if(name.equals("harsha")&&pwd.equals("123")){
			Student stu = new Student();
			stu.setId(5);
			stu.setStudentName("Kalyan");
			stu.setStudentAddress("Hyd");
			
			studentdao.save(stu);
			
			view.setViewName("display.jsp");
		}
		else{
			view.setViewName("login.jsp");
		}
		return view;
		
	}
}
