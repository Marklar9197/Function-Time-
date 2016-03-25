// Round 5

// Write a function wordReverse that accepts a single argument, a string. The method should return a string with the order of the words reversed. Don't worry about punctuation.
//var str 

//function wordReverse(string){
//str = str.reverse

//}
// function splitString(stringToSplit, separator) {
//   var arrayOfStrings = stringToSplit.split(separator);

//   console.log('The original string is: "' + stringToSplit + '"');
// }
// splitString();

// var message

// message = "Hello World"
// console.log(message.split());

function wordReverse (string){
// Get a string from the user
var words = prompt("Please enter a group of words and I will print them back to you in reverse order");
// return the string back to the user but the string is now backwards
return string.split("").reverse().join("");
}
wordReverse("spell this backwards for me");

