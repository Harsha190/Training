package com;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Hashtable;
import java.util.List;
import java.util.Map;

public class StudentGrades {
	public static void main(String[] args){
		Hashtable<String,Integer> htable = new Hashtable<String,Integer>();
		
		htable.put("Ram", 95);
		htable.put("Joe", 80);
		htable.put("Bobby", 99);
		htable.put("Rahim", 85);
		htable.put("Dave", 82);
		
		//using collections to get maximum value
		int max = Collections.max(htable.values());
		//System.out.println("Highest Marks:"+max);
		
		//by iterating thru the table
        for(Map.Entry<String,Integer> entry : htable.entrySet()) {
             if(entry.getValue() == max) {
            	 System.out.println("Name: "+entry.getKey()+", Marks:"+entry.getValue());
             }
        }
	}

}
