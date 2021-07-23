// hash = {}
// sorted = []
// let NonMerged = [[1,3],[2,4],[3,5],  [6,8], [7,9],   [10,11], [12,13]] 
// let loopNum = NonMerged.length
// let i = 0
// while(1){
//     if( NonMerged.length === 1) { sorted.push(NonMerged.shift()) ; break;} 
//     if(NonMerged[0][1] > NonMerged[1][0]){
//            arr = [NonMerged[i][0],NonMerged[i+1][1]]
//            console.log("arr"  + arr)
//            NonMerged.shift()   
//            NonMerged.shift()   
//            NonMerged.unshift(arr)
//            console.log(NonMerged + "NonMerged")
//       }else{
//         sorted.push(NonMerged.shift())
//         console.log(sorted + "sorted")
//       }
// }

// console.log(sorted)

let NonMerged = [[1,3],[2,4],[3,5],  [6,8], [7,9],   [10,11], [12,13]] 

// [1,3],[2,4],[3,5],  [6,8], [7,9],   [10,11], [12,13]
// [1,4],      [3,5],  [6,8], [7,9],   [10,11], [12,13]  ※1 
//                     [6,8], [7,9],   [10,11], [12,13]  ※1     [1,5]
//                     [6,9]           [10,11], [12,13]  ※1     [1,5]  [6,9]  
//                                     [10,11], [12,13]  ※2     [1,5]  [6,9]   [10,11]

var merged = []
while (1){
    if(NonMerged.length == 1) { merged.push(NonMerged.shift()) ; break ;}

    console.log("NonMerged" + NonMerged)
    
    if (NonMerged[0][1] > NonMerged[1][0]){
        arr = [NonMerged[0][0] ,NonMerged[1][1]]
        console.log("arr" + arr)
        NonMerged.shift() 
        NonMerged.shift()
        NonMerged.unshift(arr)
    }
    else{
        merged.push(NonMerged.shift())
        console.log("merged" + merged)
    }
}


//       4         7
//   2 ----- 5 
//           5-------- 8
// 1-2
//          5-6
//                     8----12


arr = [[2,5],[5,8],[1,2],[5,6],[8,12]].filter(
    i => (i[1] >=4 &&  i[0] <=7)
   // i => ( i[0] >= 4 
)

console.log(arr)