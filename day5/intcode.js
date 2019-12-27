/*jshint esversion: 6 */

class Intcode {
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

        let result = intArray[pos];
        if (result === undefined) {
            console.log('index: ' + index);
            console.log('pos: ' + pos);
            throw new Error('result is undefined');
        }
        return result;
    }
    
    inputValue(intArray, modes, index) {
        var numberToSave = 5; //get the ID of the system to test
        let addressToSaveAt = this.applyModeAndReturnResult(index+1, modes[0], index, intArray);
        console.log('Saving input value ' + numberToSave + ' at position ' + addressToSaveAt);
        intArray.splice(addressToSaveAt, 1, numberToSave);
        return intArray;
    }

    outputValue(intArray, modes, index) {
        let outputValue = this.applyModeAndReturnResult(intArray[index+1], modes[0], index, intArray);
        console.log('Output value: ' + outputValue);
    }
    
    addNumbers(intArray, modes, index) {
        let number1 = this.applyModeAndReturnResult(intArray[index+1], modes[0], index, intArray);
        let number2 = this.applyModeAndReturnResult(intArray[index+2], modes[1], index, intArray);
        let addressToSaveAt = this.applyModeAndReturnResult(index+3, modes[2], index, intArray);

        intArray.splice(addressToSaveAt, 1, number1+number2);
        return intArray;
    }
    
    multiplyNumbers(intArray, modes, index) {
        let number1 = this.applyModeAndReturnResult(intArray[index+1], modes[0], index, intArray);
        let number2 = this.applyModeAndReturnResult(intArray[index+2], modes[1], index, intArray);
        this.checkNotWritingWithImmediateMode(modes[2]);
        let addressToSaveAt = this.applyModeAndReturnResult(index+3, modes[2], index, intArray);
        intArray.splice(addressToSaveAt, 1, number1*number2);
        return intArray;
    }
    
    convertIntToString(inputNumber) {
        return String(inputNumber);
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
