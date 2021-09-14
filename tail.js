const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//FUNCTION IMPLEMENTATION
const tail = function(arr) {
  return arr.slice(1);
};

//TEST CASES

// Test Case: Check that the full tail is returned.
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.toString(), ["Lighthouse", "Labs"].toString());

// Test Case: Check that the original array is unchanged
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

// Test Case: Check that a one element array yields an empty array as its tail.
const oneElemArr = ["element"];
assertEqual(tail(oneElemArr).toString(), [].toString());

// Test Case: Check that an empty array yields an empty array as its tail.
assertEqual(tail([]).toString(), [].toString());
