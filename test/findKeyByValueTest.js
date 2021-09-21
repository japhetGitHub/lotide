const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

describe("#findKeyByValue", () => {
  it("should return the key in the object that has the specified value", () => {
    const inputObj = { 
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama: "The Wire",
      fantasy: "Game of Thrones",
      Crime: "The Wire"
    };
    const inputLookUpValue = "Game of Thrones";
    const expectedOutput = "fantasy";
    assert.strictEqual(findKeyByValue(inputObj, inputLookUpValue), expectedOutput);
  });
  
  it("should return the first key in the object that has the specified value when the value appears more than once in the object", () => {
    const inputObj = { 
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama: "The Wire",
      fantasy: "Game of Thrones",
      Crime: "The Wire"
    };
    const inputLookUpValue = "The Wire";
    const expectedOutput = "drama";
    assert.strictEqual(findKeyByValue(inputObj, inputLookUpValue), expectedOutput);
  });

  it("should return undefined if the object does not have the specified value", () => {
    const inputObj = { 
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama: "The Wire",
      fantasy: "Game of Thrones",
      Crime: "The Wire"
    };
    const inputLookUpValue = "That '70s Show";
    assert.isUndefined(findKeyByValue(inputObj, inputLookUpValue));
  });

  it("should return undefined if no value to specified to find", () => {
    const inputObj = { 
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama: "The Wire",
      fantasy: "Game of Thrones",
      Crime: "The Wire"
    };
    const inputLookUpValue = "";
    assert.isUndefined(findKeyByValue(inputObj, inputLookUpValue));
  });
});