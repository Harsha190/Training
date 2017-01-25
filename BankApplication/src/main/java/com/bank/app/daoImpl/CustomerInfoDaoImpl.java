package com.bank.app.daoImpl;

import org.hibernate.Session;
import org.springframework.stereotype.Component;

import com.bank.app.config.HibernateConfiguration;
import com.bank.app.dao.CustomerInfoDao;
import com.bank.app.model.CustomerInfo;

@Component
public class CustomerInfoDaoImpl implements CustomerInfoDao{

	@Override
	public void save(CustomerInfo customer) {
		Session session = HibernateConfiguration.getSessionFactory();
		
		try{
			session.save(customer);
		}catch(Exception e){
			e.printStackTrace();
		}finally{
			session.close();
		}
		
	}
}
