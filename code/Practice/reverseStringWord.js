'use strict';
//str = "Hello my name is"
const reverseWord = (str) => {
 // error checking
 if(!str || str.length <2){
     return "Not a string";
 }
 let stringW = str.split(" ");
 let array = [];
 for(let i = stringW.length - 1; i >= 0; i--) {
     array.push(stringW[i]);
 }
 return array.join(" ");
}

module.exports = reverseWord;