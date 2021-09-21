const assertObjectsEqual = require('../assertObjectsEqual');

const obj1 = {
  key1: "value1",
  key2: "value2"
};
const obj2 = {
  key1: "value1",
  key2: "value2"
};
const obj3 = {
  key1: "value1",
  key3: "value3"
};
assertObjectsEqual(obj1, obj2); // --> Assertion Passed
assertObjectsEqual(obj1, obj3); // --> Assertion Failed