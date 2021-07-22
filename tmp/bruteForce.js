// https://chomado.com/programming/competitive-programming/my-first-competitive-programming-contest/
var flatten = require('flat')

arr = ["a","b","c"]

function create_pass(num){
   
   if(num == 1){ return arr;} 
   else{
     result = [] 
     return arr.map( a => create_pass(num-1).reduce((acc, val) => acc.concat(val), []).map( p => p  + a ) )
       
   }
    
}

console.log(create_pass(3))