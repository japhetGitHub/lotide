const chai = require('chai');
const assert = chai.assert;

const middle = require('../middle');

describe("#middle", () => {
  it("check that single element array returns empty array as middle", () => {
    const inputArr = [1];
    const expectedOutput = [];
    assert.deepEqual(middle(inputArr), expectedOutput);
  });

  it("check that two element array returns empty array as middle", () => {
    const inputArr = [1, 2];
    const expectedOutput = [];
    assert.deepEqual(middle(inputArr), expectedOutput);
  });

  it("check that array with odd number of elements returns only the single middle element in an array", () => {
    const inputArr1 = [1, 2, 3];
    const expectedOutput1 = [2];
    assert.deepEqual(middle(inputArr1), expectedOutput1);
    
    const inputArr2 = [1, 2, 3, 4, 5];
    const expectedOutput2 = [3];
    assert.deepEqual(middle(inputArr2), expectedOutput2);
  });

  it("check that array with even number of elements returns the two middle elements in an array", () => {
    const inputArr1 = [1, 2, 3, 4];
    const expectedOutput1 = [2, 3];
    assert.deepEqual(middle(inputArr1), expectedOutput1);
    
    const inputArr2 = [1, 2, 3, 4, 5, 6];
    const expectedOutput2 = [3, 4];
    assert.deepEqual(middle(inputArr2), expectedOutput2);
  });
});