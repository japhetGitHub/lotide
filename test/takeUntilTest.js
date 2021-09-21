const assert = require('chai').assert;
const takeUntil = require('../takeUntil');

describe("#takeUntil", () => {
  it("should return all numbers until a negative number is seen", () => {
    const inputDataArr = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    const callback = x => x < 0;
    const expectedOutput = [ 1, 2, 5, 7, 2 ];
    assert.deepEqual(takeUntil(inputDataArr, callback), expectedOutput);
  });

  it("should return all strings until ',' character is seen", () => {
    const inputDataArr = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
    const callback = x => x === ',';
    const expectedOutput = [ 'I\'ve', 'been', 'to', 'Hollywood'];
    assert.deepEqual(takeUntil(inputDataArr, callback), expectedOutput);
  });

});