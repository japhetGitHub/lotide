const findKeyByValue = function(object, value) {
  let foundKey;
  for (const key in object) {
    if (object[key] === value) {
      foundKey = key;
      return foundKey;
    }
  }
  return foundKey;
};

module.exports = findKeyByValue;