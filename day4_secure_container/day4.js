
// input: range 356261-846303

const stringLength = 6;

var counter = 0;

for (let inputNumber = 356261; inputNumber <= 846303; inputNumber++) {
// for (let inputNumber = 123789; inputNumber <= 123789; inputNumber++) {
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




// console.log(checkSameDigitsAreInPairs("112233"));

// Only same digits in pairs are allowed.
function checkSameDigitsAreInPairs(inputString) {
    
    let previous = -1;
    let nrOfDigitsEqual = 0;
    let maxNrOfDigitsEqual = 0;
    let reset = true;

    for (let index = 0; index < inputString.length; index++) {
        let current = inputString[index];

        if (current === previous) {
            nrOfDigitsEqual++;
            maxNrOfDigitsEqual = nrOfDigitsEqual;
        } else {
            if(nrOfDigitsEqual === 1) {
                return true;
            }
            maxNrOfDigitsEqual = nrOfDigitsEqual;
            nrOfDigitsEqual = 0;
        }

        if ((inputString.length-1 === index) && (maxNrOfDigitsEqual === 1)) {
            return true;
        } 

        if (nrOfDigitsEqual > maxNrOfDigitsEqual) {
            maxNrOfDigitsEqual = nrOfDigitsEqual;
        }

        previous = current;
        maxNrOfDigitsEqual = 0;
    }

    return false;
}

// // Only same digits in pairs are allowed.
// function checkSameDigitsAreInPairs(inputString) {
    
//     let previous = -1;
//     let nrOfDigitsEqual = 0;
//     let reset = true;

//     for (let index = 0; index < inputString.length; index++) {
//         let current = inputString[index];

//         if (current === previous) {
//             reset = false;
//             nrOfDigitsEqual++;
//         } else {
//             reset = true;
//         }

//         if ((reset && ((nrOfDigitsEqual > 0) && (nrOfDigitsEqual % 2 === 0))) || (nrOfDigitsEqual > 3)) {
//             return false;
//         }
        
//         if (reset) {
//             nrOfDigitsEqual = 0;
//             reset = false;
//         }

//         if ((index === (inputString.length-1)) && (nrOfDigitsEqual % 2 === 0)) {
//             return false;
//         }

        
//         previous = current;
//     }

//     return true;
// }



