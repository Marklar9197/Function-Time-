"use strict";

// Example function - open chrome and then go to the
// console (cmd+option+j) and enter helloWorld();
var helloWorld = function(){
  console.log("Hello World!");
}


/*********************
*******Round 0********
*********************/

// For-loop approach
var lengths = function(arr){
	var newArr = [];
	for(var i = 0; i < arr.length; i++){
		newArr.push(arr[i].length);
	}
	return newArr; 
}

// While-loop approach
var lengths2 = function(arr){
	var newArr = [];
	var i = 0;
	while(i < arr.length){
		newArr.push(arr[i].length);
		i++;
	}
	return newArr;
}

// forEach approach
var lengths3 = function(arr){
	var newArr = [];
	arr.forEach(function(word){
		newArr.push(word.length);
	});
	return newArr;
}


/*********************
*******Round 1********
*********************/

var fizzbuzzer = function(num){
	if(num % 3 === 0 && num % 5 === 0){
		return "FizzBuzz";
	} else if( num % 3 === 0){
		return "Fizz";
	} else if ( num % 5 === 0){
		return "Buzz";
	} else {
		return "McClane";
	}
}

/*********************
*******Round 2********
*********************/

var transmogrifier = function(x, y, z){
	return Math.pow((x * y),z);
}

/*********************
*******Round 3********
*********************/

var toonify = function(accent, sentence){
	switch (accent){
		case "daffy": 
			return sentence.split('s').join('th');
		case "elmer":
			return sentence.split('r').join('w');
	}
}

/*********************
*******Round 4********
*********************/

var digitSum = function(num){
	if( typeof num === "number" && !isNaN(num)){
		var numStr = String(num);
		var sum = 0;
		numArr = numStr.split('');
		numArr.forEach(function(n){
			sum += parseInt(n);
		});
		return sum;
	} else {
		console.log("Invalid input")
	}
}

/*********************
*******Round 5********
*********************/

var wordReverse = function(str){
	var newStr = [];
	str = str.split(' ');
	while(str.length > 0){
		newStr.push(str.pop());
	}
	return newStr.join(' ');
}

/*********************
*******Round 6********
*********************/

var letterReverse = function(str){
	str = str.split(' ');
	newStr = [];
	str.forEach(function(word){
		newStr.push(word.split('').reverse().join(''));
	});
	return newStr.join('');
}

/*********************
*******Round 7********
*********************/

var longest = function(words){
	var longestStr = 0;
	for(var i = 1; i < words.length; i++){
		if( words[i].length > words[longestStr].length ){
			longestStr = i;
		}
	}
	return words[longestStr];
}
