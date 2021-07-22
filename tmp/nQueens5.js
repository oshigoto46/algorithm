totalNQueens = function(n){ 
    if (n === 1 || n >= 4) return dfs([], n, 0);
   return 0;
}


// oldPoints = [[0,1],
//              [1,3],
//              [2,0]];

// newPoint = [3,2];

isValid = function(oldPoints , newPoint ){
    var len = oldPoints.length;
    for(var i=0 ; i < len ; i++){
        if(oldPoints[i][1] === newPoint[1] || oldPoints[i][0] === newPoint[0]) return false;
        if(
            if ( Math.abs(
                ( oldPoints[i][1] -newPoint[1] )/ 
                ( oldPoints[i][0] -newPoint[0] )
              ) === 1 )  return false;
    }
    return true;
}


dfs = function(points,n,index){ 
    
    var res = 0;
     if(points.length === n){ 
         return 1;
     }
     for(let i = index ; i < n ; i ++){
         for(let j = 0 ; j <n ; j++){
             if(!isValid(points,[i,j]))   continue
                 points.push([i,j])
                 res += dfs(points,n,i+1)
                 points.pop()
         }
     }

     return res;

}

console.log(totalNQueens(4))