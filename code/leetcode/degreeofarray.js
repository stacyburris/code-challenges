'use strict';

// "Degree of an Array"
// Given a non-empty array N, of non-negative integers , the degree of this array is defined as the maximum frequency of any one of its elements. Your task is to find the smallest possible length of a (contiguous) subarray of N, that has the same degree as N. For example, in the array [1 2 2 3 1], integer 2 occurs maximum of twice. Hence the degree is 2.

// Input

// Test case input contains 2 lines.
// First line contains an integer T, representing the number of elements in the array.
// The second line contains the array N, list of T integers each separated by space.

// Output

// Print the length of the smallest contiguous subarray of input array N, that has the same degree as N.

process.stdin.resume();
process.stdin.setEncoding("ascii");
var inputData = "";
process.stdin.on("data", function (chunk) {
    inputData += chunk;
});
process.stdin.on("end", function () {
    // Do not edit: Output the solution to the console.
    const output = writeOutput(inputData);
    console.log(output);
});

function writeOutput(inputData) {
    // Start writing code here to consume input, and return result.
 
 
    return inputData;
}

module.exports = writeOutput;

    // let count = [];
    // for (let i = 0; i < count.length; i++ ) {
    //     if(!count[inputData[i]]){
    //         count[inputData[i]] = 1;
    //     } else {
    //         count[inputData[i]]++;
    //     }

    // }
    // let degree = 0;
    // for (let j = 0; j < count.length; j++) {
    //     if (degree < count[j]) {
    //         degree = count[j];
    //     }
    // }
    // let newArray = [];
    // for (let i = 0; i< count.length; i++) {
    //     if (degree === count[i]) {
    //         newArray.push(i);
    //     }
    //   return newArray;    
    // }
