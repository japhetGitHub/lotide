const takeUntil = function(array, callback) {
  // Returns a slice of the array with elements taken from the beginning.
  // It should keep going until the callback/predicate returns a truthy value.
  let result = [];
  for (const item of array) {
    if (callback(item)) {
      break;
    }
    result.push(item);
  }
  return result;
};

module.exports = takeUntil;