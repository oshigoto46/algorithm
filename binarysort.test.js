// const binarySearch = (array, value) => {
//     const midIndex = Math.floor(array.length / 2);
//     const midValue = array[midIndex];
  
//     if (value === midValue) return true;
//     else if (array.length > 1 && value < midValue)
//       return binarySearch(array.splice(0, midIndex), value);
//     else if (array.length > 1 && value > midValue)
//       return binarySearch(array.splice(midIndex + 1, array.length), value);
//     else return false;
//   };
  

  const _binS = function ( arr, val ){

      const midInd = Math.floor(arr.length / 2);
      if(arr[midInd] === val) return true;
      else if(arr.length > 1 && val < arr[midInd] ){
           leftArray = (arr.splice(0,midInd))
           return _binS(leftArray,val);
      }
      else if(arr.length > 1 && val > arr[midInd] ){
           rightArray = (arr.splice(midInd+1 ,arr.length))
           return _binS(rightArray,val);
      }else{
          return false
      }
  }
  
  const chai  = require("chai");
//   mocha.setup("bdd");
  const { assert } = chai;
  
//   describe("Binary Search", () => {
//     it("Should implement binary search", () => {
//       assert.equal(binarySearch([1, 2, 3, 4, 5], 0), false);
//       assert.equal(binarySearch([1, 2, 3, 4, 5, 6], 6), true);
//     });
//   });

console.log(_binS([1,2,3,4,5],2))


//   describe("bin sort", ()=>{
//      it('it should be sorted ' , () =>{
//          assert.deepEqual(_binS([1,2],0) ,[1,2]);
//      });
//   });
  
//   mocha.run();