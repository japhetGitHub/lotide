const assert = require('chai').assert;
const head   = require('../head');

describe("#head", () => {
  it("returns 5 for head([5,6,7])", () => {
    assert.strictEqual(head([5, 6, 7]), 5);
  });
  
  it("returns 'Hello' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  });
  
  it("returns undefined for head([])", () => {
    assert.strictEqual(head([]), undefined);
  });
  
  it("returns 3.4 for head([3.4])", () => {
    assert.strictEqual(head([3.4]), 3.4);
  });
});