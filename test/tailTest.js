const chai = require('chai');
const assert = chai.assert;

const tail = require('../tail');

describe("#tail", () => {
  it("check that the full tail is returned", () => {
    const inputArr = ["Hello", "Lighthouse", "Labs"];
    const expectedOutput = ["Lighthouse", "Labs"];
    assert.deepEqual(tail(inputArr), expectedOutput);
  });

  it("check that the original array is unchanged", () => {
    const inputArr = ["Yo Yo", "Lighthouse", "Labs"];
    const expectedOutput = 3;
    tail(inputArr); // no need to capture the return value since we are not checking it
    assert.strictEqual(inputArr.length, expectedOutput); // original array should still have 3 elements!
  });

  it("check that a one element array yields an empty array as its tail", () => {
    const inputArr = ["element"];
    const expectedOutput = [];
    assert.deepEqual(tail(inputArr), expectedOutput);
  });

  it("check that an empty array yields an empty array as its tail", () => {
    const inputArr = [];
    const expectedOutput = [];
    assert.deepEqual(tail(inputArr), expectedOutput);
  });
});