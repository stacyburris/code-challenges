'use strict';


// Pseudo Code

// Function fizzBuzz(n) {
//    // If n is not a number or not an integer greater than zero, return null

//   // create empty array to store output

//   // loop through numbers from 1 to n

//   // if number modulo 3 is zero and number modulo 5 is zero, add 'fizzBuzz' to array

//   // else if number modulo 3 is zero add 'fizz' to output array

//   // else if number modulo 5 Is zero, add 'buzz' to output array

//   // else add the number to the array

//   // return output array
// }

function FizzBuzz(n) {
    if(isNaN(n) || !Number.isInteger(n) || n < 1)
    return null; // error checking
      let outPut = [];
      for (let i = 1; i <= n; i++) {
      if(i % 3 === 0 && i % 5 === 0) {
       outPut.push("FizzBuzz");
      } else if (i % 3 === 0) {
       outPut.push("Fizz");
    } else if (i % 5 === 0) {
      outPut.push("Buzz");
      } else {
      outPut.push(i);
      //outPut.push(i.toString()); // to return a string
     }
      }  
    return outPut;
    }
    //console.log(FizzBuzz(15))

    module.exports = FizzBuzz;

// [ 1,
//     2,
//     'fizz',
//     4,
//     'buzz',
//     'fizz',
//     7,
//     8,
//     'fizz',
//     'buzz',
//     11,
//     'fizz',
//     13,
//     14,
//     'fizzBuzz' ]


     