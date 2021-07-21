


function fizzBuzz(n) {
    if(isNaN(n) || !Number.isInteger(n) || n < 1)
    return null; // error checking
      let outPut = [];
      for (let i = 1; i <= n; i++) {
      if(i % 3 === 0 && i % 5 === 0) {
       outPut.push('fizzBuzz');
      } else if (i % 3 === 0) {
       outPut.push("fizz");
    } else if (i % 5 === 0) {
      outPut.push("buzz");
      } else {
      outPut.push(i);
     }
      }  
    return outPut;
    }
    console.log(fizzBuzz(15))
       
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
     