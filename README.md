# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @japhet-dev/lotide`

**Require it:**

`const _ = require('@japhet-dev/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:
*  `assertArraysEqual(actual, expected)`: takes in two arrays and prints if they are equal or not.
*  `assertEqual(actual, expected)`: takes in two values and prints if they are strictly equal or not.
*  `assertObjectsEqual(actual, expected)`: takes in two objects and prints if they are equal or not.
*  `countLetters(sentence)`: takes in a sentence (as a string) and then returns a count of each of the letters in that sentence.
*  `countOnly(allItems, itemsToCount)`: takes in a collection of items and returns counts for a specific subset of those items.
*  `eqArrays(array1, array2)`: compares two arrays for a perfect match.
*  `eqObjects(object1, object2)`: takes in two objects and returns true or false, based on a perfect match.
*  `findKey(obj, callback)`: scans the object and return the first key for which the callback returns a truthy value.
*  `findKeyByValue(object, value)`: scans the object and returns the first key which contains the given value.
*  `head(arr)`: retrieves the first element from the array.
*  `letterPositions(sentence)`: returns all the indices (zero-based positions) in the string where each character is found.
*  `map(array, callback)`: returns a new array based on the results of the callback function.
*  `middle(arr)`: takes in an array and return the middle-most element(s) of the given array.
*  `tail(arr)`: retrieves every element except the head (first element) of the array.
*  `takeUntil(array, callback)`: keeps collecting items from a provided array until the callback provided returns a truthy value.
*  `without(source, itemsToRemove)`: returns a new array with only those elements from source that are not present in the itemsToRemove array.
