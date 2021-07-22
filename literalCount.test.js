
//literal = "([)])".split("")

function findParentheses(literal){
    arr = literal.split("");

    if(arr.length < 2){return false}
        
    stack = [arr[0]];
    
    if (arr[0] === ']' || arr[0] === ')' || arr[0] === '}')
    {return false}

    for(let i = 1 ; i< arr.length; i++){
      lastLit = stack.slice(-1)[0]
      // console.log(stack)
      // console.log(findTheOtherOne(lastLit))
      if(findTheOtherOne(lastLit) !== arr[i]){
        if (arr[i] === ']' || arr[i] === ')' || arr[i] === '}')
        {return false}
        stack.push(arr[i])
        // console.log(stack)
      }else{
        if( findTheOtherOne(lastLit)  === arr[i]) { // ([>
            // console.log("here")
            stack.pop()
        }
        else{  // ([]
            return false;
        }
      }
       
    }
    if(stack.length ===0 ) return true;
    return false;
   
}

function findTheOtherOne(lit){
    if(lit ===  "("){
       return ")";
    }
    if(lit === ")"){
        return "(";
    }
    if(lit ===  "]"){
        return "[";
    }
    if(lit === "["){
        return "]";
    }
    if(lit ===  "{"){
        return "}";
    }
    if(lit === "}"){
        return "{";
    }
}

// console.log(findTheOtherOne("("))

console.log("1 true:" + findParentheses("()"))      // 1 true
console.log("2 true:" +findParentheses("()[]{}"))  // 2 true 
console.log("3 false:" +findParentheses("(]"))      // 3 false
console.log("4 false:" +findParentheses(")("))      // 4 false ✗✗✗✗　ERROR
console.log("5 false:" +findParentheses("([)]"))    // 5 false 
console.log("6: true:" +findParentheses("{[]}"))      // 6 false
console.log("7 false:" +findParentheses(")"))      // 7 false
console.log("8 false:" +findParentheses("([]"))      // 8 false
console.log("9 false:" +findParentheses(""))        // 9 false
console.log("10 false:" +findParentheses("([)])"))   // 10 false
console.log("11 true:" +findParentheses("(((((((((())))))))))")) // 11 true
// console.log("11 true:" +findParentheses("(((((((((())))))))))")) // 11 true
console.log("13 false:" +findParentheses("(){]")) // 12 false


// / ---
// var chai  = require("chai");
// const { assert } = chai;
// describe('assersion', function(){
//   it('assersion simple result', function(){
//       // assert.assertEqual(firstRepeatedCharacter("A"),null);
//       assert.true(findParentheses("A"),null);
//       assert.equal(firstRepeatedCharacter("ABCA"),"A");
//       assert.equal(firstRepeatedCharacter("BCABA"),"B");
//       assert.equal(firstRepeatedCharacter("glovol"),"l");
//       assert.equal(firstRepeatedCharacter("ABC"),null);
//       assert.equal(firstRepeatedCharacter("AB"),null);
//       assert.equal(firstRepeatedCharacter(null),null);
//   });
// });