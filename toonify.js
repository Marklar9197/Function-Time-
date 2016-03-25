//Round 3

//Write a function called toonify that takes two parameters, accent and sentence.

//If accent is the string "daffy", return a modified version of sentence with all "s" replaced with "th".
//If the accent is "elmer", replace all "r" with "w".
//Feel free to add your own accents as well!
//If the accent is not recognized, just return the sentence as-is.
//toonify("daffy", "so you smell like sausage")
//#=> "tho you thmell like thauthage"


// toonify();



// function toonify(accent, sentence) {
// str = (accent, sentence);
// var x = str.replace(/s/g, "th");
// var y = str.replace(/r/g, "w");
// if (accent === "daffy", sentence = x){
//  return accent, sentence;
// }
//   if (accent === "elmer", sentence = y){
// 	return accent,sentence;
// }   else if (accent, sentence) {
//     return accent, sentence;
// }
// }

function toonify(accent, sentence){
// Crete variable prompts that ask two questions
var quest1= prompt("Choose an accent, daffy or elmer");
var quest2 = prompt("Please type a sentence");
// Create an if statement for the "elmer" accent and return the new sentence 
if (quest1 === "elmer"){
return quest2.replace(/r/g, "w");
}
// Create an if statement for the "daffy" accent and return the new sentence
else if (quest1 === "daffy"){
return quest2.replace(/s/g, "th");
}
// Create an else if statement if the accents chosen were not "elmer" or "daffy"
else if(quest1 != "daffy" && quest1 != "elmer"){
alert("Please enter the correct accent exactly as you see it in the prompt");
return quest1;
}
}
toonify();




