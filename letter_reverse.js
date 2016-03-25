





/////////DEFINITIONS/////////

// Definitions taken from MDN and W3SCHOOLS for reference

//.split The split() method splits a String object into an array of strings by separating the string into substrings.




//.reverse The reverse() method reverses the order of the elements in an array.



//.join The join() method joins the elements of an array into a string, and returns the string.




function letterReverse(string){
// return the user string and then apply methods to get the letters to appear in reverse order
return string.split("").reverse().join("").split(" ").reverse().join(" ");
}

letterReverse("well howdy partner");



//.split

// "dlroW olleH".split(" "); = ["dlroW", "olleH"]
// "Hello World".split(""); = ["H", "e", "l", "l", "o", " ", "W", "o", "r", "l", "d"]




//.reverse ["hello", "brandon"].reverse(); = ["brandon", "hello"]



//.join ["letters"].join(' '); = "letters";
