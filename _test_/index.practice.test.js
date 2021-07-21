'use strict';


const fizzBuzz = require('../code/Practice/fizzBuzz.js');

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