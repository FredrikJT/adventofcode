/*jshint esversion: 6 */

var Intcode = require('./intcode');
var intString;
var modes = [];
var index = 0;
var intcode;


describe("day5 test", () => {

    beforeAll(() => {
        intcode = new Intcode();
        
    });

    xit('should add two numbers and put it in the correct position', () => {
        modes = [0,0,0,0];
        intString = [0,1,2,1337];
        intcode = new Intcode(intString, index);
        intcode.addNumbers(0,1,2,modes);
        expect(intString[0]).toEqual(3);
    });

    it('should have 70 at pos 3', () => {
        intString = [1,4,4,0,3];
        intcode = new Intcode(intString, index);
        modes = [0,0,0,0];

        console.log('intString length 1: ' + intString.length);
        intString = intcode.addNumbers(intString, modes, index);
        console.log('INTSTRING' +intString + ' length ' + intString.length);
        expect(intString).toEqual([6,4,4,0,3]);
        
    });

    it('should return the value at the given address', () => {
        intString = [0,1,2,1337];
        intcode = new Intcode();
        address = 3;
        let result = intcode.getValueOfAddressAtPosition(address, index, intString);
        expect(result).toEqual(1337);
    });

    it('should get the correct modes array', () => {
        intString = [1002,4,3,4,33];
        opAndMode = intcode.convertIntToString(intString[0]);
        let modes = intcode.getModesArray(opAndMode);
        expect(modes[0] === 0);
        expect(modes[1] === 1);
        expect(modes[2] === 0);
        console.log('modesArray: ' + modes);
    });

    xit('Should be able to handle modes', () => {
        intString = [1002,4,3,4,33];
        mode = 0; // Position mode ( take value in position )
        positionOrAddress = 3;
        let result = intcode.applyModes(positionOrAddress, mode);
        expect(result).toEqual(intString[3]);
    });

    it('adding 1,0,0,0,99 should output [2,0,0,0,99]', () => {
        
        var intArray = [1,0,0,0,99]; // becomes 2,0,0,0,99 
        let result = intcode.addNumbers(intArray, [0,0,0,0], 0);
        expect(result).toEqual([2,0,0,0,99]);
    });

    it('multiplying [2,3,0,3,99] should output 2,3,0,6,99]', () => {
        var intArray = [2,3,0,3,99]; // becomes 2,3,0,6,99
        let result = intcode.multiplyNumbers(intArray, [0,0,0,0], 0);
        expect(result).toEqual([2,3,0,6,99]);
    });

    it('multiplying [2,4,4,5,99,0] should output [2,4,4,5,99,9801]', () => {
        var intArray = [2,4,4,5,99,0]; // becomes 2,4,4,5,99,9801
        let result = intcode.multiplyNumbers(intArray, [0,0,0,0], 0);
        expect(result).toEqual([2,4,4,5,99,9801]);
    });
    
    xit('adding [1,1,1,4,99,5,6,0,99] should output [30,1,1,4,2,5,6,0,99]', () => {
        var intArray = [1,1,1,4,99,5,6,0,99]; // becomes 2,4,4,5,99,9801
        let result = intcode.addNumbers(intArray, [0,0,0,0], 0);
        expect(result).toEqual([30,1,1,4,2,5,6,0,99]);
        console.log('expecting [30,1,1,4,2,5,6,0,99]. Actual: ' + result);
    });
});
