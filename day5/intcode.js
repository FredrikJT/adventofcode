/*jshint esversion: 6 */
// var rl = require('readline');

// var i = rl.createInterface(process.sdtin, process.stdout, null);

// var prompt = require('prompt');

class Intcode {
    constructor(
        ) {
    }

    getValueOfAddressAtPosition(pos, index, intArray) {
        
        if (pos === undefined) {
            throw new Error('pos is undefined');
        }
        if (index === undefined) {
            throw new Error('index is undefined');
        }
        if (intArray === undefined) {
            throw new Error('intString is undefined');
        }

        // let result = intArray[index+pos];
        let result = intArray[pos];
        if (result === undefined) {
            console.log('index: ' + index);
            console.log('pos: ' + pos);
            throw new Error('result is undefined');
        }
        return result;
    }
    
    inputValue(intArray, modes, index) {
        var numberToSave = 1;
        // prompt.start();
        // var numberToSave = prompt.get();
        // i.question("input value...", function(answer) {
        //     numberToSave = answer;
          
        //     // These two lines together allow the program to terminate. Without
        //     // them, it would run forever.
        //     i.close();
        //     process.stdin.destroy();
        //   });
        // var numberToSave = window.prompt("input value...");
        // numberToSave = this.applyModeAndReturnResult(numberToSave, modes[0], index);
        // let addressToSaveAt = this.applyModeAndReturnResult(intArray[index+1], modes[0], index, intArray);
        let addressToSaveAt = this.applyModeAndReturnResult(index+1, modes[0], index, intArray);
        console.log('Saving input value ' + numberToSave + ' at position ' + addressToSaveAt);
        // intArray[addressToSaveAt] = numberToSave;
        intArray.splice(addressToSaveAt, 1, numberToSave);
        return intArray;
    }

    outputValue(intArray, modes, index) {
        // TODO: index+1 instead of intArray[index+1]?
        let outputValue = this.applyModeAndReturnResult(intArray[index+1], modes[0], index, intArray);
        console.log('Output value: ' + outputValue);
    }
    
    addNumbers(intArray, modes, index) {
        let number1 = this.applyModeAndReturnResult(intArray[index+1], modes[0], index, intArray);
        let number2 = this.applyModeAndReturnResult(intArray[index+2], modes[1], index, intArray);
        // let addressToSaveAt = this.applyModeAndReturnResult(intArray[index+3], modes[2], index, intArray);
        let addressToSaveAt = this.applyModeAndReturnResult(index+3, modes[2], index, intArray);

        intArray.splice(addressToSaveAt, 1, number1+number2);
        return intArray;
    }
    
    multiplyNumbers(intArray, modes, index) {
        let number1 = this.applyModeAndReturnResult(intArray[index+1], modes[0], index, intArray);
        let number2 = this.applyModeAndReturnResult(intArray[index+2], modes[1], index, intArray);
        this.checkNotWritingWithImmediateMode(modes[2]);
        // let addressToSaveAt = this.applyModeAndReturnResult(intArray[index+3], modes[2], index, intArray);
        let addressToSaveAt = this.applyModeAndReturnResult(index+3, modes[2], index, intArray);
        intArray.splice(addressToSaveAt, 1, number1*number2);
        return intArray;
    }
    
    
    convertIntToString(inputNumber) {
        return String(inputNumber);
    }
    
    getValueAtAdress(address, intArray) {
        return intArray[address];
    }

    getOpcode(inputArray) {
        const lengthOfArray = inputArray.length;
        return inputArray.slice(lengthOfArray-2, lengthOfArray);
    }

    getModesArray(inputArray) {
        const lengthOfArray = inputArray.length;
        const modesString = inputArray.slice(0, lengthOfArray-2);
        var modes = [];
    
        for (let index = 0; index < modesString.length; index++) {
            let element = modesString[index];
            element = parseInt(element);
            modes.unshift(element); // Reverse order of modes
            // modes.push(element);
        }
    
        return modes;
    }

    applyModeAndReturnResult(positionOrAddress, mode, index, intArray) {
        var result;

        if (mode === 0) {
            result = this.getValueOfAddressAtPosition(positionOrAddress, index, intArray); 
        } else if (mode === 1) {
            result = positionOrAddress;
        } else {
            throw new Error('mode is not 0, neither 1');
        }

        if (result === undefined) {
            throw new Error('result is undefined');
        }

        return result;
    }

    checkNotWritingWithImmediateMode(mode) {
        if (mode != 0) {
            throw new Error('Using something else than position mode when saving to an adress! Mode: ' + mode);
        }
    }
}

module.exports = Intcode;

