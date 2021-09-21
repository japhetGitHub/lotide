const eqArrays = require('./eqArrays');

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

module.exports = eqObjects;