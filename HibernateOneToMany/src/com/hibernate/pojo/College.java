package com.hibernate.pojo;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class College {
	private int collegeId;
	private String collegeName;
	private List<Students> stu;
	
	@Id
	@GeneratedValue
	public int getCollegeId() {
		return collegeId;
	}
	public void setCollegeId(int collegeId) {
		this.collegeId = collegeId;
	}
	public String getCollegeName() {
		return collegeName;
	}
	public void setCollegeName(String collegeName) {
		this.collegeName = collegeName;
	}
	
	@OneToMany(targetEntity=Students.class, mappedBy="college", cascade=CascadeType.ALL, fetch=FetchType.LAZY)
	public List<Students> getStu() {
		return stu;
	}
	public void setStu(List<Students> stu) {
		this.stu = stu;
	}
	
	

}
