package com;

import java.sql.*;

public class MainClass {
	public static void main(String[] args){
		Connection conn = null;
		Statement stmt =null;
		try{
			Class.forName("com.mysql.jdbc.Driver");
			
			conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/store","root","harsha");
			System.out.println("Connection established");
			
			stmt = conn.createStatement();
			String query = "select * from mytable;";
			ResultSet rs = stmt.executeQuery(query);
			while(rs.next()){
				int id = rs.getInt("id");
				String name = rs.getString("name");
				int age = rs.getInt("age");
				
				System.out.print("ID: "+id);
				System.out.print(",Age: "+age);
				System.out.println(",Name: "+name);
			}
			rs.close();
			
			String insQuery = "insert into mytable values('kalyan',005,38)";
			stmt.execute(insQuery);
			System.out.println("inserted Successfully");
			
			
			String selquery = "select * from mytable;";
			ResultSet rs1 = stmt.executeQuery(selquery);
			while(rs1.next()){
				int id = rs1.getInt("id");
				String name = rs1.getString("name");
				int age = rs1.getInt("age");
				
				System.out.print(id);
				System.out.print(","+age);
				System.out.println(","+name);
			}
			rs1.close();
			
			
			conn.close();
		}catch(Exception e){
			System.out.println("Not");
		}
	}
}
