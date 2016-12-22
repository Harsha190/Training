package com;

import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.Set;

public class EmployeeRecords {
	public static void main(String[] args){
		HashMap<Integer,String> hmap = new HashMap<Integer,String>();
		
		hmap.put(111, "Ram");
		hmap.put(222, "Joe");
		hmap.put(333, "Bobby");
		hmap.put(444, "Rahim");
		hmap.put(555, "Dave");
		
		Set set = hmap.entrySet();
		Iterator itr = set.iterator();
		while(itr.hasNext()){
			Map.Entry entry = (Map.Entry) itr.next();
			System.out.println("ID:"+entry.getKey()+" Name:"+entry.getValue());
		}
	}

}
