const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe("#letterPositions", () => {
  it("should return an object with properties for each letter and all the positions they appear in the input text", () => {
    const inputText = "lighthouse in the house";
    const expectedOutput = {
      h: [3, 5, 15, 18],
      l: [0],
      u: [7, 20],
      n: [12],
      e: [9, 16, 22],
      g: [2],
      i: [1, 11],
      o: [6, 19],
      s: [8, 21],
      t: [4, 14]
    };
    assert.deepEqual(letterPositions(inputText), expectedOutput);
  });
});