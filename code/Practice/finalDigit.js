function finalDigit (input) {
    //input = "12345";
  let result = _helper(input);
  //while loop  >= 10
   while(result >= 10) {
    result = _helper(result.toString()) // convert number back to a string
  }
  return result;
    }
    let _helper = (input) => {
  let counter = 0;
   for (let i = 0; i < input.length; i++) {
     if(input[i] === "-") { // if there is negative numbers
       counter += parseInt(input[i+1]*-1)
       i += 1;   
     } else {
        counter += parseInt(input[i]);
     }
  }
  return counter;
  }
  //console.log(finalDigit("12-5"))
  console.log(finalDigit("12345"))

  // can my numbers be less than zero
  // string wants a number = conversions
  // string = array of characters
  // iterate through string add numbers
  // space: O(1)
  // Time: O(n)