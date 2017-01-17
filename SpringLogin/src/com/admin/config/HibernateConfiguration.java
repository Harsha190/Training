package com.admin.config;

import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

public class HibernateConfiguration {
	private static SessionFactory sessionFactory;
	
	static{
		try{
			Configuration config = new Configuration();
			config.setProperty("hibernate.connection.url", "jdbc:mysql://localhost:3306/store");
			config.setProperty("hibernate.connection.username", "harsha");
			config.setProperty("hibernate.connection.password", "harsha");
			config.setProperty("hibernate.dialect", "org.hibernate.dialect.MySQLDialect");
			config.setProperty("hibernate.show_sql", "false");
			config.setProperty("hibernate.connection.autocommit", "true");
			config.setProperty("hibernate.id.new_generator_mappings", "false");
		}catch(Throwable ex){
			throw new ExceptionInInitializerError(ex);
		}
	}
	
}
