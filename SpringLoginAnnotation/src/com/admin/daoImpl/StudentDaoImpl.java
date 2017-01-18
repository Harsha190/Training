package com.admin.daoImpl;

import com.admin.model.Student;

import org.hibernate.Session;
import org.springframework.stereotype.Repository;

import com.admin.config.HibernateConfiguration;
import com.admin.dao.StudentDao;

@Repository
public class StudentDaoImpl implements StudentDao {

	@Override
	public void save(Student student) {
		Session session = HibernateConfiguration.getSessionFactory();
		
		try{
			session.save(student);
		}catch(Exception e){
			e.printStackTrace();
		}finally{
			session.close();
		}
		
	}

}
