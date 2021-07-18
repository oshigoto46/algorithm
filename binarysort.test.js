const binarySearch = (array, value) => {
    const midIndex = Math.floor(array.length / 2);
    const midValue = array[midIndex];
  
    if (value === midValue) return true;
    else if (array.length > 1 && value < midValue)
      return binarySearch(array.splice(0, midIndex), value);
    else if (array.length > 1 && value > midValue)
      return binarySearch(array.splice(midIndex + 1, array.length), value);
    else return false;
  };
  
  
  const chai  = require("chai");
//   mocha.setup("bdd");
  const { assert } = chai;
  
  describe("Binary Search", () => {
    it("Should implement binary search", () => {
      assert.equal(binarySearch([1, 2, 3, 4, 5], 0), false);
      assert.equal(binarySearch([1, 2, 3, 4, 5, 6], 6), true);
    });
  });
  
//   mocha.run();