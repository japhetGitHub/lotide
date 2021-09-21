const eqArrays = require('./eqArrays');

const assertArraysEqual = require('./assertArraysEqual');

const middle = function(arr) {
  let midElements;
  let midpos;

  if (arr.length === 1 || arr.length === 2) { //when there is no middle (1 or 2 elements)
    midElements = [];
  } else {
    midpos = Math.ceil(arr.length / 2) - 1; //calculate middle position
    if (arr.length % 2 === 0) {
      midElements = arr.slice(midpos, midpos + 2); //when array has even length capture 2 elements
    } else {
      midElements = arr.slice(midpos, midpos + 1); //when array has odd length capture 1 element
    }
  }
  return midElements;
};

module.exports = middle;