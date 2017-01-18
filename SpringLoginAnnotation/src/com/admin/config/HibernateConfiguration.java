package com.admin.config;

import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.boot.registry.StandardServiceRegistryBuilder;
import org.hibernate.cfg.Configuration;

import com.admin.model.Student;


public class HibernateConfiguration {
	private static SessionFactory sessionFactory;
	
	static{
		try{
			Configuration config = new Configuration();
			config.setProperty("hibernate.connection.url", "jdbc:mysql://localhost:3306/store");
			config.setProperty("hibernate.connection.username", "harsha");
			config.setProperty("hibernate.connection.password", "harsha");
			config.setProperty("hibernate.dialect", "org.hibernate.dialect.MySQLDialect");
			config.setProperty("hibernate.connection.driver_class", "com.mysql.jdbc.Driver");
			config.setProperty("hibernate.show_sql", "false");
			config.setProperty("hibernate.connection.autocommit", "true");
			config.setProperty("hibernate.id.new_generator_mappings", "false");
			
			StandardServiceRegistryBuilder builder = new StandardServiceRegistryBuilder().applySettings(config.getProperties());
			sessionFactory = config.addPackage("com.admin.model.*").addAnnotatedClass(Student.class).buildSessionFactory(builder.build());
		
		}catch(Throwable ex){
			throw new ExceptionInInitializerError(ex);
		}
	}
	public static Session getSessionFactory() throws HibernateException{
		return sessionFactory.openSession();
		
	}
}
