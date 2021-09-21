const without = function(source, itemsToRemove) {
  let newArr = [];
  for (const val of source) {
    newArr.push(val);
  }

  for (let i = 0; i < itemsToRemove.length; i++) {
    for (let j = 0; j < newArr.length; j++) {
      if (newArr[j] === itemsToRemove[i]) {
        newArr.splice(j, 1);
      }
    }
  }

  return newArr;
};

module.exports = without;