const countLetters = function(sentence) {
  let letters = {};

  for (const char of sentence) {
    if (char === " ") { // skips if character is a space
      continue;
    } else {
      if (letters[char]) { //checks if character already exists in letters object
        letters[char] += 1; // adds to existing character count in object
      } else {
        letters[char] = 1; // starts character count in object
      }
    }
  }

  return letters;
};

module.exports = countLetters;