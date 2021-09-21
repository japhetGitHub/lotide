const assert = require('chai').assert;
const map = require('../map');

describe("#map", () => {
  it("should return a new array transformed by a callback function to only contain the first letters of each element", () => {
    const inputArr = ["ground", "control", "to", "major", "tom"];
    const callback = word => word[0];
    const expectedOutput = ['g', 'c', 't', 'm', 't'];
    assert.deepEqual(map(inputArr, callback), expectedOutput);
  });
  
  it("should return a new array of undefined elements when callback returns undefined", () => {
    const inputArr = ["ground", "control", "to", "major", "tom"];
    const callback = word => undefined;
    const expectedOutput = [undefined, undefined, undefined, undefined, undefined];
    assert.deepEqual(map(inputArr, callback), expectedOutput);
  });
  
  it("should return a new array transformed by the callback function to returns only the first two characters for each element", () => {
    const inputArr = ["ground", "control", "to", "major", "tom"];
    const callback = word => word.slice(0,2);
    const expectedOutput = ['gr', 'co', 'to', 'ma', 'to'];
    assert.deepEqual(map(inputArr, callback), expectedOutput);
  });
});