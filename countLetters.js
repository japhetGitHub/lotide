const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(sentence) {
  let letters = {};

  for (const char of sentence) {
    if (char === " ") { // skips if character is a space
      continue;
    } else {
      if (letters[char]) { //checks if character already exists in letters object
        letters[char] += 1; // adds to existing character count in object
      } else {
        letters[char] = 1; // starts character count in object
      }
    }
  }

  return letters;
};

// Test Cases
const result = countLetters("Hello LHL World");
assertEqual(result["e"], 1);
assertEqual(result["l"], 3);
assertEqual(result["o"], 2);
assertEqual(result["r"], 1);
assertEqual(result["d"], 1);
assertEqual(result["H"], 2);
assertEqual(result["L"], 2);
assertEqual(result["W"], 1);