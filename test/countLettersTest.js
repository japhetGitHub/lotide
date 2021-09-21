const assert = require('chai').assert;
const countLetters = require('../countLetters');

describe("#countLetters", () => {
  it("should return an object with the frequency of each letter in input string", () => {
    const inputString = "Hello LHL World";
    const expectedOutput = {
      e: 1,
      l: 3,
      o: 2,
      r: 1,
      d: 1,
      H: 2,
      L: 2,
      W: 1
    };
    assert.deepEqual(countLetters(inputString), expectedOutput);
  });
});