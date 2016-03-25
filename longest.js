// Round 7

// Write a function longest that accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.

// function longest(stringArray){
// var array = prompt("Please present an array of strings");
// array = array.length
	
// }
// Part of this example was taken from stack overflow
function longestString(someArray) {
	// the longest string is currently at a 0 length
    var result = "";
    //loop through the array, starting at the first string
    //  The iterator will start at 0. While iterator is less than the array length, evaluate strings and then increase iterator 
    for (var i = 0; i < someArray.length; i++) {
    	//check to see if the current string is the longest string
        if (someArray[i].length > result.length)) {
	//find a candidate for the longest string and put it inside the result
            result = someArray[i];
        }
    }
    //we compared each and every string, changing the result each time we found a longer one
    //return result, this is the longest string
    return result;
}

