//Write a function that returns the sum of two numbers


// Function that takes two parameters
function digitSum(x,y){
// The function then returns the sum of the two numbers
   return x + y;
}
// Create variables to distingusih between the two numbers
var num1,
	num2
// Create number prompts and convert the input string to an integer
num1 = parseInt(prompt("Please choose a number"));
num2 = parseInt(prompt("Please choose a second number"));
// Alert the sum of the two numbers to the user
alert("The sum of your two numbers is "+digitSum(num1, num2));