
// input: range 356261-846303

const stringLength = 6;

var counter = 0;

for (let inputNumber = 356261; inputNumber <= 846303; inputNumber++) {
    let inputString = convertIntToString(inputNumber);

    if (checkNumberNeverDecrease(inputString)) {
        if (adjacentDigitsAreTheSame(inputString)) {
            if (checkSameDigitsAreInPairs(inputString)) {
                counter++;
            }
        }
    }
}

console.log(counter);

// Going from left to right, the digits never decrease;
// they only ever increase or stay the same (like 111123 or 135679).
function checkNumberNeverDecrease(inputString) {
    if (typeof(inputString) !== "string") {
        throw("Input not string");
    }

    let previous = 0;
    for (let index = 0; index < inputString.length; index++) {
        let current = inputString[index];
        if (current < previous) {
            return false;
        }

        previous = current;
    }
    return true;
}

function convertIntToString(inputNumber) {
    return String(inputNumber);
}

// Two adjacent digits are the same (like 22 in 122345).
function adjacentDigitsAreTheSame(inputString) {
    
    let previous = 0;
    for (let index = 0; index < inputString.length; index++) {
        let current = inputString[index];

        if (current === previous) {
            return true;
        }
        
        previous = current;
    }

    return false;
}


// Only same digits in pairs are allowed.
function checkSameDigitsAreInPairs(inputString) {
    
    let previous = 0;
    let nrOfDigitsEqual = 0;
    let reset = true;
    for (let index = 0; index < inputString.length; index++) {
        let current = inputString[index];

        if (current === previous) {
            reset = false;
            nrOfDigitsEqual++;
        } else if (nrOfDigitsEqual > 0 && nrOfDigitsEqual % 2 == 0) {
            return false;
        } else if (reset) {
            nrOfDigitsEqual = 0;
        }

        if (inputString.length-1 == index && nrOfDigitsEqual % 2 == 0) {
            return false;
        }

        reset = true;
        previous = current;
    }

    return true;
}


// console.log(checkSameDigitsAreInPairs("111122"));
