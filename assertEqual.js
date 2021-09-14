//FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅✅✅ Assertion Passed: " + actual + " === " + expected);
  } else {
    console.log("🛑🛑🛑 Assertion Failed: " + actual + " !== " + expected);
  }
};

//TEST CODE
assertEqual("Assignment", "Assignment"); //comparing identical strings
assertEqual("Lighthouse Labs", "Bootcamp"); //comparing non-identical strings
assertEqual(1, 1); //comparing identical numbers
assertEqual(3, -4); //comparing non-identical numbers
