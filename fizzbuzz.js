

// Variable Declarations
var avow = require('avow'); //this adds program avow (true/false program Collin wrote)//

// Functional Declarations
function FizzBuzz (n) {   //function is storing statements together to perform a specific task.//
        var output ='';  //variable set for output, where it will later cancatenate all outputs into a string.//
        for (var i = 1; i <= n; i++) { //for statement, 
            //initialization, condition, update
    //if a number is divisible by 5 with no remainder and divisible by 3 with no remainder, output +(previous output) and fizzbuzz// 
        if (i % 5 === 0 && i % 3 === 0) { 
            output += 'FizzBuzz';
       }
    //if a number is divisible by 5 with no remainder, but not divisible by 3 with no remainder, output +(previous output) and buzz//
        else if (i % 5 === 0 && i % 3 !== 0) {
            output += 'Buzz';
       }
       //if a number is divisible by 3 with no remainder, but not divisible by 5 with no remainder, output +(previous output) and fizz//
        else if (i % 3 === 0 && i % 5 !== 0) {
           output += 'Fizz';
       }
       //if a number is not divisible by 3 with no remainder, and not divisible by 5 with no remainder, output +(previous output) and .// 
        else /*(n % 3 !== 0 & n % 5 !== 0)*/ {
           output += '.';
       }
    }
    return output; //this returns data from the function
    
}
    
FizzBuzz(15); //calls the function whenever I need it to run




// Tests (do not modify these)
avow('FizzBuzz 1 should be .', '.' === FizzBuzz(1), '.', FizzBuzz(1));
avow('FizzBuzz 2 should be ..', '..' === FizzBuzz(2), '..', FizzBuzz(2));
avow('FizzBuzz 3 should be ..Fizz', '..Fizz' === FizzBuzz(3), '..Fizz', FizzBuzz(3));
avow('FizzBuzz 5 should be ..Fizz.Buzz', '..Fizz.Buzz' === FizzBuzz(5), '..Fizz.Buzz', FizzBuzz(5));
avow('FizzBuzz 10 should be ..Fizz.BuzzFizz..FizzBuzz', '..Fizz.BuzzFizz..FizzBuzz' === FizzBuzz(10), '..Fizz.BuzzFizz..FizzBuzz', FizzBuzz(10));
avow('FizzBuzz 15 should be ..Fizz.BuzzFizz..FizzBuzz.Fizz..FizzBuzz', '..Fizz.BuzzFizz..FizzBuzz.Fizz..FizzBuzz' === FizzBuzz(15), '..Fizz.BuzzFizz..FizzBuzz.Fizz..FizzBuzz', FizzBuzz(15));