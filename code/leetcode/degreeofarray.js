// "Degree of an Array"

// This is a sample question and not part of your interview.


// Given a non-empty array N, of non-negative integers , the degree of this array is defined as the maximum frequency of any one of its elements. Your task is to find the smallest possible length of a (contiguous) subarray of N, that has the same degree as N. For example, in the array [1 2 2 3 1], integer 2 occurs maximum of twice. Hence the degree is 2.

// Input

// Test case input contains 2 lines.
// First line contains an integer T, representing the number of elements in the array.
// The second line contains the array N, list of T integers each separated by space.

// Output

// Print the length of the smallest contiguous subarray of input array N, that has the same degree as N.
// Code evaluation is based on your output, please follow the sample format and do NOT print anything else.

// Use native http or https module to send network request if needed.
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

// Filtered is using the nodejs v8 engine to process JavaScript. Please write your code inside the function block below.
// Our grading criteria is based on stream output, please return your output to log your final result.

function writeOutput(inputData) {
    // Start writing code here to consume input, and return result.
 
 
    return inputData;
}
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
