'use strict';

// Requiring each JS page to test
const fizzBuzz = require('../code/Practice/fizzBuzz.js');
const findMissingValue = require('../code/Practice/findMissingValue.js');
const reverseWord = require('../code/Practice/reverseStringWord.js');
const isFib = require('../code/Practice/isFib.js');
// Practice Question on FizzBuzz

describe('FizzBuzz challenge. Print integers 1 to N, but print “Fizz” if an integer is divisible by 3, “Buzz” if an integer is divisible by 5, and “FizzBuzz” if an integer is divisible by both 3 and 5', () => {
    it('returns 1 when given 1 as an argument', () => {
        expect(fizzBuzz(1)).toEqual([1]);
    });
    it('returns an array of [1, 2] when divisible by 2', () => {
        expect(fizzBuzz(2)).toEqual([1, 2]);
    });
    it('returns an array of [1, 2, "Fizz"] when divisible by 3', () => {
        expect(fizzBuzz(3)).toEqual([1, 2, "Fizz"]);
    });
    it('returns an array of [1, 2, "Fizz", 4, "Buzz"] when divisible by 5', () => {
        expect(fizzBuzz(5)).toEqual([1, 2, "Fizz", 4, "Buzz"]);
    });
    it('returns an array of [1, 2, "Fizz", 4, "Buzz", "Fizz"] when divisible by 6', () => {
        expect(fizzBuzz(6)).toEqual([1, 2, "Fizz", 4, "Buzz", "Fizz"]);
    });
    it('returns an array of [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz"] when divisible by 10', () => {
        expect(fizzBuzz(10)).toEqual([1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz"]);
    });
    it('returns an array of [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"] when divisible by 15', () => {
        expect(fizzBuzz(15)).toEqual([1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]);
    });
});


// Testing Missing Value in array challenge
describe('Given a sorted array with integers from 1 to 10, there is one number missing. Find that number', () => {
it('Finds missing number 4 in sorted array', () => {
    let array = [1, 2, 3, 5, 6, 7, 8, 9, 10];
    expect(findMissingValue(array)).toEqual([4]);
})
it('Finds missing number 9 in sorted array', () => {
    let array = [1, 2, 3, 4, 5, 6, 7, 8, 10];
    expect(findMissingValue(array)).toEqual([9]);
})
it('Finds both missing number 4, 9 in sorted array', () => {
    let array = [1, 2, 3, 5, 6, 7, 8, 10];
    expect(findMissingValue(array)).toEqual([4, 9]);
})
})


// Testing reverse string word

describe('reverseWord', () => {
    it('can reverse a string by the word', () => {
       let string = 'Hello my name is';
       expect(reverseWord(string)).toEqual('is name my Hello')
    })
})

// Testing if number is apart of Fibonacci sequence return true

describe('isFib', () => {
    it('Will return true if number is apart of the scequence of isFib', () => {
        expect(isFib(8)).toBeTruthy();
    })
})