const assert = require('chai').assert;
const countOnly = require('../countOnly');

describe("#countOnly", () => {
  it("checks that an item listed to be counted that is not on the list of all items returns undefined", () => {
    const allItems = ["Karl", "Salima", "Agouhanna", "Fang", "Kavith", "Jason", "Salima", "Fang", "Joe"];
    const itemsToCount = { "Karima": true };
    assert.isUndefined(countOnly(allItems, itemsToCount));
  });
  
  it("checks that an item listed as false (i.e. semantically ~'do not count') returns undefined even when on the list of all items", () => {
    const allItems = ["Karl", "Salima", "Agouhanna", "Fang", "Kavith", "Jason", "Salima", "Fang", "Joe"];
    const itemsToCount = { "Agouhanna": false };
    assert.isUndefined(countOnly(allItems, itemsToCount));
  });

  it("checks that an item listed to be counted that is on the list of all items multiple times returns how many times it appears on the list", () => {
    const allItems = ["Karl", "Salima", "Agouhanna", "Fang", "Kavith", "Jason", "Salima", "Fang", "Joe"];
    const itemsToCount = { "Fang": true };
    const expectedOutput = { "Fang": 2 };
    assert.deepEqual(countOnly(allItems, itemsToCount), expectedOutput);
  });

  it("checks that an item listed to be counted that is on the list of all items once returns how many times it appears on the list", () => {
    const allItems = ["Karl", "Salima", "Agouhanna", "Fang", "Kavith", "Jason", "Salima", "Fang", "Joe"];
    const itemsToCount = { "Jason": true };
    const expectedOutput = { "Jason": 1 };
    assert.deepEqual(countOnly(allItems, itemsToCount), expectedOutput);
  });
});