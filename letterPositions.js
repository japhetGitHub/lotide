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

const letterPositions = function(sentence) {
  const results = {};

  for (let index = 0; index < sentence.length; index++) {
    if (results[sentence[index]]) {
      results[sentence[index]].push(index);
    } else if (sentence[index] !== " ") {
      results[sentence[index]] = [index];
    }
  }
  return results;
};

// Test Cases
const posResults = letterPositions("lighthouse in the house");
assertArraysEqual(posResults.h, [3, 5, 15, 18]);
assertArraysEqual(posResults.l, [0]);
assertArraysEqual(posResults.u, [7, 20]);
assertArraysEqual(posResults.n, [12]);