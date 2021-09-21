const assert = require('chai').assert;
const without = require('../without');

describe("#without", () => {
  it("should return the same array excluding the item specified to be removed [1]", () => {
    const inputArr = [1, 2, 3];
    const elementToBeRemoved = [1];
    const expectedOutput = [2, 3];
    assert.deepEqual(without(inputArr, elementToBeRemoved), expectedOutput);
  });

  it("should return the same array excluding the item specified to be removed and ignoring items specified which are not found", () => {
    const inputArr = ["1", "2", "3"];
    const elementToBeRemoved = [1, 2, "3"];
    const expectedOutput = ["1", "2"];
    assert.deepEqual(without(inputArr, elementToBeRemoved), expectedOutput);
  });

  it("should return the exact same array with no items excluded when none of the items specified are found", () => {
    const inputArr = ["1", "2", "3"];
    const elementToBeRemoved = [1, 2];
    const expectedOutput = ["1", "2", "3"];
    assert.deepEqual(without(inputArr, elementToBeRemoved), expectedOutput);
  });
 
  it("should return the exact same array with no items excluded when no items are specified to be removed", () => {
    const inputArr = ["1", "2", "3"];
    const elementToBeRemoved = [];
    const expectedOutput = ["1", "2", "3"];
    assert.deepEqual(without(inputArr, elementToBeRemoved), expectedOutput);
  });
  
  it("should return an empty array when the source array is empty (i.e. has no items to search through)", () => {
    const inputArr = [];
    const elementToBeRemoved = [1, 2, 3];
    const expectedOutput = [];
    assert.deepEqual(without(inputArr, elementToBeRemoved), expectedOutput);
  });

  it("should not alter the source array", () => {
    const inputArr = ["hello", "world", "lighthouse"];
    const elementToBeRemoved = ["lighthouse"];
    without(inputArr, elementToBeRemoved); // no need to capture return value for this test case
    assert.deepEqual(inputArr, ["hello", "world", "lighthouse"]);
  });
});