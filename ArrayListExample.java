package com;

import java.util.ArrayList;

public class ArrayListExample {
	public static void main(String []args)
	{
	ArrayList<Integer> arrayList = new ArrayList<Integer>();
	for(int i=1;i<=10;i++){
		arrayList.add(i);
	}
	
	for(int a:arrayList){
		System.out.println(a);
	}
}

}