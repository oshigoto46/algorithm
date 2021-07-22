var hash = {}
var arr  = [1,2,3,3,5]

arr.map(i => hash[i] = hash[i] + 1 || 1)
var arr2 =(Object.values(hash).sort().reverse())

console.log(arr2)


function make_filter(N,K){
     // const K = 2 
     // const N = 4 
     filter = new Array(N)
     filter.fill(-1)
     filter.fill(0,K)

     console.log(filter)
     return filter;
} 

K =2 
while(1){
     console.log(arr2)
     if(arr2.length < K) break;

     make_filter(arr2.length,K)
     arr2.forEach(function(v,i) {
          arr2[i] = arr2[i] + filter[i] 
     })
     console.log(arr2)
     arr2 = arr2.filter(i => i !== 0 )
     console.log(arr2)
}

// function N_reduce1_and_prune0(arr){
//      arr.forEach(function(v,i){
//         arr[i] = arr[i] 
//      })
// }
