// Example 1:
// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]

// Example 2:
// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [9,4]
// Explanation: [4,9] is also accepted.

// Problem Domain:

// Given two integer arrays nums1 and nums2, return an array of their intersection.
// Each element must be unique and you may return the result in any order

// Edge Cases:
// - Empty Array
// - Null
// - NaN
// - Positive Integers
// - Negative Integers

// Constraints:

// 1 <= nums1.length, nums2.length <= 1000
// 0 <= nums1[i], nums2[i] <= 1000

// create empty array
// store arrays in a Sets, 
// forEach set1
// if set1.has(nums1)
// push output.push(the numbers)
//Return the output array

let nums1 = [4,9,5];
let nums2 = [9,4,9,8,4];  

let intersection = function(nums1, nums2) {
let output = [];
let set1 = new Set(nums1);
let set2 = new Set(nums2);
//console.log(set1);
set1.forEach(numbers => {
//console.log(numbers)
    if(set2.has(numbers)){
    output.push(numbers)
    }
})
//console.log(output)
return output;
}
intersection(nums1, nums2);
//console.log(intersection(numbers));