// First test ever!
const assert = require("assert");
const { forEach, map } = require("./index");

// Reusable test function to escape global scope for variables
// Includes a try catch so that all tests still run

// Comment out 'test' function when using Mocha and change 'test' to 'it' at other  functions

// const test = (desc, func) => {
//   console.log("---", desc);
//   try {
//     func();
//   } catch (err) {
//     console.log(err.message);
//   }
// };

// forEach test
it("The forEach function", () => {
  let sum = 0;
  forEach([1, 2, 3], (value) => {
    sum += value;
  });

  //  Uses node.js to replace the if statement
  assert.strictEqual(sum, 6, "Expected summing array to equal 6. It does not.");

  //   if (sum !== 6) {
  //     throw new Error("Expected summing array to equal 6. It does not.");
  //   }
});

// map test
it("The map function", () => {
  const result = map([1, 2, 3], (value) => {
    return value * 2;
  });

  // An even more refined assertion!
  assert.deepStrictEqual(result, [2, 4, 6]);

  //  Uses node.js to replace the if statement
  //   assert.strictEqual(result[0], 2);
  //   assert.strictEqual(result[1], 4);
  //   assert.strictEqual(result[2], 6);

  //   if (result[0] !== 2) {
  //     throw new Error(`Expected to find 2, but the maths are wong! We found ${result[0]}`);
  //   }
  //   if (result[1] !== 4) {
  //     throw new Error(`Expected to find 4, but the maths are wong! We found ${result[1]}`);
  //   }
  //   if (result[2] !== 6) {
  //     throw new Error(`Expected to find 6, but the maths are wong! We found ${result[2]}`);
  //   }
});
