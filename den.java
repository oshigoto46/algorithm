package algorithm;

import java.util.ArrayDeque;
import java.util.ArrayList;

// [[1,3],[2,4],[3,5],  [6,8], [7,9],   [10,11], [12,13]] 
public class Merge {
   public static void main(String[] args)
   {  
	     ArrayList<Integer> a1 = new ArrayList<Integer>();
	     ArrayList<Integer> a2 = new ArrayList<Integer>();
	     ArrayList<Integer> a3 = new ArrayList<Integer>();
	     ArrayList<Integer> a4 = new ArrayList<Integer>();
	     ArrayList<Integer> a5 = new ArrayList<Integer>();
	     
	     a1.add(1); a1.add(2);
	     a2.add(2); a2.add(4);
	     a3.add(3); a3.add(5);
	     a4.add(6); a4.add(8);
	     
	     ArrayDeque<ArrayList<Integer>> aa = new ArrayDeque<ArrayList<Integer>>();
	     
	     aa.add(a1);
	     aa.add(a2);
	     aa.add(a3);
	     aa.add(a4);
	     
	     while(!aa.isEmpty()) {
	    	 ArrayList a = aa.pop();
	    	 System.out.println(a.get(0) + ":" + a.get(1));
	     }
	     
	     
   }
   
}
