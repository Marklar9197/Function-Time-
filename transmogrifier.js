/* Round 2

Write a Javascript function called transmogrifier This function should accept three arguments, which you can assume will be numbers. Your function should return the "transmogrified" result

The transmogrified result of three numbers is the product of the first two numbers, raised to the power of the third number.

For example, the transmogrified result of 5, 3, and 2 is (5 times 3) to the power of 2 is 225.

Use your function to find the following answers.

transmogrifier(5, 4, 3)
transmogrifier(13, 12, 5)
transmogrifier(42, 13, 7)*/







function transmogrifier(x,y,z){
var answer
answer = Math.pow((x*y),z);
return answer
}

console.log(transmogrifier(5,4,3)); 
console.log(transmogrifier(13,12,5)); 
console.log(transmogrifier(42,13,7)); 


/*function transmogrifier(num1, num2, num2){
var num1,
	num2,
	num3;
num1 = prompt("Please enter a first number");
num2 = prompt("Please enter a second number");
num3 = prompt("Please enter a third number");
}*/

