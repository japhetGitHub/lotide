const assertEqual = require('../assertEqual');

//TEST CODE
assertEqual("Assignment", "Assignment"); //comparing identical strings
assertEqual("Lighthouse Labs", "Bootcamp"); //comparing non-identical strings
assertEqual(1, 1); //comparing identical numbers
assertEqual(3, -4); //comparing non-identical numbers