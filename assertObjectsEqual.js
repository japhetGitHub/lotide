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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) { // if the objects have unequal number of keys ~shortcircuit
    return false;
  }
  for (const key in object1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) { // checks if both values are Arrays
      if (!eqArrays(object1[key], object2[key])) { //if the arrays are not equal
        return false;
      }
    } else if (object1[key] !== object2[key]) { // else if primitive
      return false;
    }
  }
  return true;
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const obj1 = {
  key1: "value1",
  key2: "value2"
}
const obj2 = {
  key1: "value1",
  key2: "value2"
}
assertObjectsEqual(obj1, obj2);