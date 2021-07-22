//const factorial = number => number < 2 ? 1 : number * factorial(number - 1);
const _factorial = num => num < 2 ? 1 : num * _factorial(num - 1);
// const factorialize = number => {
//   let product = 1;
//   for (let i = 2; i <= number; i++) {
//     product *= i;
//   }
//   return product;
// };


var chai  = require("chai");

const { assert } = chai;

describe("Factorial", () => {
  it("Should implement factorial", () => {
    assert.equal(_factorial(4),24)
    // assert.equal(factorial(0), 1);
    // assert.equal(factorial(1), 1);
    // assert.equal(factorial(2), 2);
    // assert.equal(factorial(3), 6);
    // assert.equal(factorial(4), 24);
    // assert.equal(factorial(5), factorialize(5));
  });
});
