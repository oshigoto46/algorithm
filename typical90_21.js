// 
//              8
//             /
//            5 --7
//            /   
//  4--1 -  2 -- 6
//      | 
//      3
//   
// 
// 

//# copy from https://github.com/riantkb/typical90_python

hash = {1:[2,3,4],2:[1,5,6],3:[1],4:[1],5:[2,7,8],6:[2],7:[5],8:[5]}


// 1<=>7

// distance(2,5) =1
// distance(2,7) =2
// distance(1,7) =3

let loop = 0
let already = []
let short_path =[]
function distance(a,b){
       loop += 1
       already.push(a)
       if(loop > 100){ return 0;}

       console.log("calling distance a:"+a +"b:" +b );

       if(hash[a].includes(b)){
           console.log("finally" + a +"finds:" + b)
           short_path.push(b)
           console.log(short_path)
           return short_path
       }
       else{
           
           for(let i= 0 ; i < hash[a].length; i++){
               _b = hash[a][i] 
               console.log("for loop" + a +":" + _b)
               if(already.includes(_b)) {
                   console.log("a" + a + ":" + _b + ": skip")
                   continue;
               }

               // console.log("a:" +a+ "b:" +_b )
               already.push(_b)
               console.log("========callee!!========")
               if (distance(_b,b).length === 0){
                    console.log("===continue===")
                    continue
               }
               else{
                  console.log("===return===" + distance(_b,b))
                  return distance(_b,b).push(_b)
               }
            }
       }
}

console.log(distance(1,7))

