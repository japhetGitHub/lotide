const letterPositions = function(sentence) {
  const results = {};

  for (let index = 0; index < sentence.length; index++) {
    if (results[sentence[index]]) {
      results[sentence[index]].push(index);
    } else if (sentence[index] !== " ") {
      results[sentence[index]] = [index];
    }
  }
  return results;
};

module.exports = letterPositions;