package com.hibernate.main;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;
import org.hibernate.tool.hbm2ddl.SchemaExport;

import com.hibernate.pojo.Employee;
import com.hibernate.pojo.EmployeeDetail;

public class EmployeeMain {

	public static void main(String[] args) {
		Configuration config = new Configuration();
		config.addAnnotatedClass(Employee.class);
		config.addAnnotatedClass(EmployeeDetail.class);
		config.configure("Hibernate.cfg.xml");
		
		new SchemaExport(config).create(true, true);
		
		SessionFactory factory = config.buildSessionFactory();
		Session session = factory.getCurrentSession();
		session.beginTransaction();
		
		EmployeeDetail emp1 = new EmployeeDetail();
		emp1.setCity("NJ");
		emp1.setCountry("USA");
		emp1.setJob("Developer");
		
		Employee emp = new Employee();
		emp.setEmpName("Arjun");
		
		emp.seteDetail(emp1);
		
		session.save(emp);
		session.getTransaction().commit();
		
	}

}
