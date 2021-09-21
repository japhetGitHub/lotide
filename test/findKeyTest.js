const assert = require('chai').assert;
const findKey = require('../findKey');

describe("#findKey", () => {
  it("should return the first property in object whose value satisfies callback", () => {
    const inputObj = {
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    };
    const callback = x => x.stars === 2;
    const expectedOutput = "noma";
    assert.strictEqual(findKey(inputObj, callback), expectedOutput);
  });

  it("should return undefined if no properties in object satisfy callback", () => {
    const inputObj = {
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    };
    const callback = x => x.stars === 10;
    assert.isUndefined(findKey(inputObj, callback));
  });
});