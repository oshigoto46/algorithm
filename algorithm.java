package algorithm;

import java.util.Stack;

public class algorithm {
 
	
	public  boolean findParenthes(String string){
	
		String[] s2 = string.split("");
		Stack stack1 = new Stack<String>();
		Stack stack2 = new Stack<String>();
		Stack stack3 = new Stack<String>();
		
		if(string.length() == 0) {
			return false;
		}
		
//		if(!s2[0].equals("(") && !s2[0].equals("{") && !s2[0].equals("[")) {
//            return false;
//		}
		
	    for(String s : s2 ) {
	    	//System.out.print(s);
	        if(s == "(") {
	        	stack1.add(s);
	        }
	        if(s == "{") {
	        	stack2.add(s);
	        }
	        if(s == "[") {
	        	stack3.add(s);
	        }
	        if(s == ")") {
	        	if(stack1.empty()) return false;
	        	stack1.pop();
	        }
	        if(s == "}") {
	        	if(stack2.empty()) return false;
	        	stack2.pop();
	        }
	        if(s == ")") {
	        	if(stack3.empty()) return false;
	        	stack3.pop();
	        }
	    }
	    
	    
	    
		//Arrays.stream(s.split("")).toArray(String[]::new);
		return true;
	}
	
	public String getOtherLiteral(String string) {
		if(string == "(") {
			return ")";
		}else if(string == "{") {
			return "}";
		}else if(string == "[") {
			return "]";
		}else {
			return "";
		}
	}
	public static void main(String[] args) {
		// TODO 自動生成されたメソッド・スタブ

	}

}

//
    algorithm a = new algorithm();
		assertFalse(a.findParenthes(""));
		assertFalse(a.findParenthes("}"));
		assertTrue(a.findParenthes("()"));
		assertTrue(a.findParenthes("(((((((((())))))))))"));
		assertTrue(a.findParenthes("()[]{}"));
		assertFalse(a.findParenthes("([)])"));

