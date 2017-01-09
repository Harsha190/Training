package com.admin.main;

import java.util.Iterator;
import java.util.List;
import java.util.ListIterator;

import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;
import org.hibernate.criterion.Restrictions;

import com.admin.pojo.Student;

public class MainClass{

	public static void main(String[] args) {
		
		Configuration cfg = new Configuration();
		cfg.configure("Hibernate.cfg.xml");
		SessionFactory sf = cfg.buildSessionFactory();
		Session s = sf.openSession();
		Transaction tx = s.beginTransaction();
		
		//****************Retreiving data from the data base
		Criteria cr = s.createCriteria(Student.class);
		//cr.add(Restrictions.gt("studentName", "Kishore"));
		cr.add(Restrictions.eq("studentAddress", "India"));
		List<Student> students = cr.list();
		ListIterator<Student> itr = students.listIterator();
		while(itr.hasNext()){
			Student student = (Student) itr.next(); 
			System.out.println("Name: " + student.getStudentName()+"  Address: " + student.getStudentAddress()); 
		}

		//***********************Save Data to the data base
		
//		Student st = new Student();
//		st.setId(4);
//		st.setStudentName("Arjun");
//		st.setStudentAddress("USA");
		
		//s.save(st);
		//s.flush();
		
		
		tx.commit();
		s.close();
	}

}
