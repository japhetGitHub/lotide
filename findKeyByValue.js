const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(object, value) {
  let foundKey;
  for (const key in object) {
    if (object[key] === value) {
      foundKey = key;
      return foundKey;
    }
  }
  return foundKey;
};

// Test Assertions
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
  fantasy: "Game of Thrones",
  Crime: "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "Game of Thrones"), "fantasy");
assertEqual(findKeyByValue(bestTVShowsByGenre, ""), undefined);