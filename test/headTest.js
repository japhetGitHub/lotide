const assertEqual = require('../assertEqual');
const head = require('../head');

//TEST CASES
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), undefined);
assertEqual(head([3.4]), 3.4);