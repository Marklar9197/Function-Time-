/*Round 1

Write a function fizzbuzzer that accepts a single parameter as an argument, a number, and will return the following:

- The string "Fizz" if the number is evenly divisible by 3
- The string "Buzz" if the number is evenly divisible by 5
- The string "FizzBuzz" if the number is evenly divisible by 3 AND 5
- The string "McClane" if the number is not divisible by 3 OR 5*/



function fizzbuzzer(number){

var number

// If statement to determine if the number is divisible by 3
number = prompt("Please enter a number");	
if (number % 3 ===0){
	alert("Fizz");
}
// Else If statement to determine if the number is divisible by 5
else if (number % 5=== 0){
	alert("Buzz");
}
// Else If statement to determine if the number is divisible by 5 and 3
else if(number % 5 ===0 && number % 3===0) {
alert("FizzBuzz");
}
// Else If statement to determine if the number is not divisible by 5 and the number is not divisilbe by 3
else if(number %5 !=0 && number %3 !=0) {
	alert("McClane");
}
}

fizzbuzzer();
