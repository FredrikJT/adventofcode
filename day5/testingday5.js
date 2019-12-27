/*jshint esversion: 6 */

var Intcode = require('./intcode');

var index = 0;
var modes = [0,0,0,0];
// var intString = [9,4,4,5,3,0];
// var intString = [1002,4,3,4,33];
// var intString = [5,4,3,2,1,0];

var intArray = [1,0,0,0,99]; // becomes 2,0,0,0,99 

var intcode = new Intcode();
// let result = intcode.getValueOfAddressAtPosition(0,3,intString);

// let result = intcode.addNumbers(intArray, modes, 0);
// let result = intcode.multiplyNumbers(intString, modes, 0);


// let result = intcode.applyModeAndReturnResult(0, 0, 0, intString);

var intArray = [2,4,4,5,99,0]; // becomes 2,4,4,5,99,9801
let result = intcode.multiplyNumbers(intArray, [0,0,0,0], 0);

console.log(result);