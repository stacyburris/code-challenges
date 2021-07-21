'use strict';


// Problem Domain:
// - Given a sorted array with integers from 1 to 10, there is one number missing. Find that number

// - Is this array limited to a single count array or restricted to a certain pattern?
//  - For now this is linear

// Edge Case:
// - repeated values
// - empty
// - Null


// Constraints:
// - All data types are integers
// - All integers are positive


// Pseudo:

// let findMissingValue = function(nums) {
//   // create empty array variable to store output array
//   // create counter variable that will increment and compare to current element.  // counter = array[0]
// // for loop to loop through array
// // compare counter to idx value
// // If value and counter are not equal push into new array
// // set counter to current idx value
// // increment counter
// // return output array outside of for loop
// } // close function

// Input: [1, 2, 3, 5, 6, 7, 8, 10]

// output: [4, 9]

let nums = [1, 2, 3, 5, 6, 7, 8, 10];

let findMissingValue = function(nums) {
 let output = [];
  let counter = nums[0]; // first number in array
  for (let i = 0; i < nums.length; i++){
    if(counter != nums[i]) {
      output.push(counter);
      counter = nums[i];
    }
counter++;
  }
  return output;
}
console.log(findMissingValue(nums));

module.exports = findMissingValue;