'use strict';
//35. Search Insert Position

// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
// You must write an algorithm with O(log n) runtime complexity.

var searchInsert = function(nums, target) {
    let leftIdx = 0;
    let rightIdx = nums.length - 1;
    if( nums.length === 1 )  // error checking
      if( target <= nums[0] )   // error checking
      return 0; 
     else {
      return 1;
    }
      if(target === nums[0]) { // error checking
    return 0;
  }
  while ( leftIdx <= rightIdx ) {
  
    let mid = Math.floor((leftIdx + rightIdx) / 2 )
    if ( target === nums[mid]) {
  
     return mid;
  } 
      if ( target < nums[mid] ) {
      rightIdx = mid - 1;
    } else {
      leftIdx = mid + 1;
    }
    } 
      return target > nums[leftIdx] ? leftIdx + 1 : leftIdx;
  }

  module.exports = searchInsert;




// function binarySearch(array, key) {
//   let L = 0;
//   let R = array[-1];
//   while (L < R) {
//     let middle = Math.floor(array.length / 2);
//     if (array[middle] < key) {
//       L = key + 1;
//     } else if (array[middle] > key) {
//       R = key - 1;
//     } else {
//       return key;
//     }
//   }
// }
// binarySearch();