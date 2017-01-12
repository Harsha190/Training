package com.hibernate.main;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;
import org.hibernate.tool.hbm2ddl.SchemaExport;

import com.hibernate.pojo.College;
import com.hibernate.pojo.Students;

public class MainClass {

	public static void main(String[] args) {
		Configuration config = new Configuration();
		config.addAnnotatedClass(College.class);
		config.addAnnotatedClass(Students.class);
		config.configure("Hibernate.cfg.xml");
		
		new SchemaExport(config).create(true, true);
		
		SessionFactory factory = config.buildSessionFactory();
		Session session = factory.getCurrentSession();
		session.beginTransaction();
		
		College c1 = new College();
		c1.setCollegeName("IIT");
		
		Students s1 = new Students();
		s1.setStudentName("Alan");
		
		Students s2 = new Students();
		s2.setStudentName("Donald");
		
		s1.setCollege(c1);
		s2.setCollege(c1);

		session.save(c1);
		session.save(s1);
		session.save(s2);
		
		session.getTransaction().commit();
	}

}
