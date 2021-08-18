'use strict';

// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.

//EXAMPLE:
// Input: s = "III"
// Output: 3

const romanToInt = function(s){
    let map = { // set key / value pairs in a hashmap
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    let previous = 0; // variable for tracking previous
    let output = 0; // variable for tracking output #

    for (let i = s.length - 1; i >= 0; i--) { // for loop through length of string
        let key = s[i]; // variable key is index of string
        let num = map[key]; // numbers variable holds map at the index of string
    
        if(num < previous){
            result -= num; 
        } else {
            result += num;
        }
        previous = num;
    }
    return output;
   
}