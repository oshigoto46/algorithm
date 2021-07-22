var hash = {} 
arr2 = "(]".split("")
var judege = (arr1) => {
    for(let i = 0 ; i < arr1.length ; i ++){

        console.log(hash)

       if( arr1[i] === "(" ){
          hash["("] =  hash["("] +1 || 1
       } 
       else if( arr1[i] === "{" ){
          hash["{"] =  hash["{"] +1 || 1
       } 
       else if( arr1[i] === "[" ){
          hash["["] =  hash["["] +1 || 1
       } 
       else if( arr1[i] === "}" ){
          if(!hash["{"] || hash["{"] === 0 || hash["["] >0 ||hash["("] >0  ) return 1;
          hash["{"] =  hash["{"] -1 
       } 
       else if( arr1[i] === ")" ){
          console.log("here")
          if(!hash["("] || hash["("] === 0  || hash["["] >0 ||hash["{"] >0 ) return 2;
          console.log("here")
          hash["("] =  hash["("] -1 
       } 
       else if( arr1[i] === "]" ){
          if(!hash["["] || hash["["] === 0  || hash["{"] >0 ||hash["("] >0 ) return 3;
          hash["["] =  hash["["] -1
       } 

    }

    console.log(hash) 
    console.log("values" + Object.values(hash))
    ret = Object.values(hash).every(i => i === 0)
    console.log(ret)
}

console.log( judege(arr2) )
