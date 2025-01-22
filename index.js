// Step 1: Prompt for user input
const userInput = prompt("Please enter numbers separated by commas:");

// Step 2: Turn the user's input into an array
const stringArray = userInput.split(',');

// Step 3: Convert the strings into numbers
const numberArray = [];
for (let i = 0; i < stringArray.length; i++) {
    numberArray.push(Number(stringArray[i].trim()));
}

// Step 4: Create the functions

// 1. getLength
const getLength = function(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        count++;
    }
    return count;
};

// 2. getSum
const getSum = function(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
};

// 3. getMean
const getMean = function(arr) {
    return getSum(arr) / getLength(arr);
};

// 4. getMin
const getMin = function(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
};

// 5. getMax
const getMax = function(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
};

// 6. getRange
const getRange = function(arr) {
    return getMax(arr) - getMin(arr);
};

// 7. getEvens
const getEvens = function(arr) {
    const evens = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evens.push(arr[i]);
        }
    }
    return evens;
};

// 8. getOdds
const getOdds = function(arr) {
    const odds = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            odds.push(arr[i]);
        }
    }
    return odds;
};

// Example usage
console.log("Length:", getLength(numberArray));
console.log("Sum:", getSum(numberArray));
console.log("Mean:", getMean(numberArray));
console.log("Min:", getMin(numberArray));
console.log("Max:", getMax(numberArray));
console.log("Range:", getRange(numberArray));
console.log("Evens:", getEvens(numberArray));
console.log("Odds:", getOdds(numberArray));