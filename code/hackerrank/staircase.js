'use strict';

// Staircase detail
//// This is a staircase of size n = 4:
//// Its base and height are both equal to n. It is drawn using # symbols and spaces. The last line is not preceded by any spaces.
//// Write a program that prints a staircase of size n.

// Function Description

//// Complete the staircase function in the editor below.
//// staircase has the following parameter(s):
//// int n: an integer

// Print

//// Print a staircase as described above.

//// Input Format

//// A single integer, n, denoting the size of the staircase.

// CONSTRAINTS
//// 0 < n <_ 100

// OUTPUT FORMAT 
//// Print a staircase of size n using # symbols and spaces

// NOTE: The last line must have 0 spaces in it

// SAMPLE INPUT: 
    //6
// SAMPLE OUTPUT
    ```
      #
     ##
    ###
   ####
  #####
 ######
    ```
// EXPLANATION: The staircase is right-aligned, composed of # symbols and spaces, and has a height and width of n = 6.

// SOLUTION

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the staircase function below.
function staircase(n) {
    for(let i = 1; i <= n; i++){
          console.log(" ".repeat(n-i) + "#".repeat(i))  
    }
    
// making it too hard with 2 or 3 for loops
// one loop to track the rows
// one loop to track the spaces
// one loop to track the #
// NESTED LOOP? CONCATENATES SINGLE CORRECT NUMBER OF TIMES AND HASHES THE CORRECT NUMBER OF TIMES
// ARRAY WITH SPACES SHIFTED/UNSHIFTED, THEN "JOIN" THE ARRAY ITEMS?
// ['','','#'] (UNSHIFT)-> ['', '#'] (PUSH) -> ['', '#', '#'](JOIN) -> ' ##'

}

function main() {
    const n = parseInt(readLine(), 10);

    staircase(n);
}

module.exports = staircase;