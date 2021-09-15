const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const without = function(source, itemsToRemove) {
  let newArr = [];
  for (const val of source) {
    newArr.push(val);
  }

  for (let i = 0; i < itemsToRemove.length; i++) {
    for (let j = 0; j < newArr.length; j++) {
      if (newArr[j] === itemsToRemove[i]) {
        newArr.splice(j, 1);
      }
    }
  }

  return newArr;
};


// TEST CASES

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]); // true
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); // true
assertArraysEqual(without(["1", "2", "3"], [1, 2]), ["1", "2", "3"]); // true
assertArraysEqual(without(["1", "2", "3"], []), ["1", "2", "3"]); // true
assertArraysEqual(without([], [1, 2, 3]), []); // true


const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]); // true