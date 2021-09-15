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

const middle = function(arr) {
  let midElements;
  let midpos;

  if (arr.length === 1 || arr.length === 2) { //when there is no middle (1 or 2 elements)
    midElements = [];
  } else {
    midpos = Math.ceil(arr.length / 2) - 1; //calculate middle position
    if (arr.length % 2 === 0) {
      midElements = arr.slice(midpos, midpos + 2); //when array has even length capture 2 elements
    } else {
      midElements = arr.slice(midpos, midpos + 1); //when array has odd length capture 1 element
    }
  }
  return midElements;
};

//TEST CASES
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);

assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);