// https://atcoder.jp/contests/tenka1-2015-qualb/tasks/tenka1_2015_qualB_a

function fib2(n){
    if(n === 1 ){
       return 100;
    }
    if(n === 2 ) {
      return 200 + 100 ;
    }
    if(n === 3 ) {
      return 300 + 200 + 100;
    }
    else{
       return fib2(n-1) + fib2(n-2) + fib2(n-3);
    }
 }