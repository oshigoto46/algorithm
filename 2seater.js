const { assertTerminatorless } = require("@babel/types");
const { Hash } = require("crypto");

function count(arr){
    return arr;
}

var arr =  [8,1,8];

tmpArray = new Array(arr[0])
tmpArray.fill("empty");

arr.shift()
while(arr.length>0){
    elem =arr.shift()
    tmpArray[elem-1] = "taken"
}

//console.log(tmpArray)


function calcNextSeat(tmpArray,ind){
    let resultArray = new Array();

    _indMax = tmpArray.length - 1

    let countVerticalPrevious = 0;
    let countVerticalNext     = 0;
    let horizontalAdjacent    = 0;


    let elem = tmpArray[ind];
    if(elem==="taken"){
        return [];
    }

     if(ind +2 > _indMax){
          countVerticalNext = 0;
     }else if(tmpArray[ind+2] === "taken"){
          countVerticalNext = 0;
     }else {
       // countVerticalNext = ind+2;
        resultArray.push(new Array(ind,ind+2))
     }

     if(ind -2 < 0 ){
        countVerticalPrevious = 0;
      }else if(tmpArray[ind-2] === "taken"){
        countVerticalPrevious = 0;
      }else {
        resultArray.push(new Array(ind-2,ind))
      }

      if(ind %2 === 0){
        if(tmpArray[ind+1] === "empty"){
          // horizontalAdjacent =1;
          resultArray.push(new Array(ind,ind+1))
        }
      }else if(ind %2 ===1 ){
        if(tmpArray[ind-1] === "empty"){
            //horizontalAdjacent =ind-1;
            resultArray.push(new Array(ind-1,ind))
          }
      }

    //   console.log("countVerticalNext" + countVerticalNext)
    //   console.log("countVerticalPrevious" + countVerticalPrevious)
    //   console.log("horizontalAdjacent" + horizontalAdjacent)

    return resultArray;
      //return countVerticalNext + countVerticalPrevious + horizontalAdjacent;
}

// console.log(calcNextSeat(tmpArray,4))

//console.log(tmpArray);

allResultArray = {}

for(let i = 0; i < tmpArray.length ; i++){
      for ( x of calcNextSeat(tmpArray,i)){
        allResultArray[x] = 1
       }
    
    // for(x of calcNextSeat(tmpArray,i)){
    //    // console.log(x instanceof Array)
    //     allResultArray.add(x)
    //    }
}

console.log((Object.keys(allResultArray)).length )


