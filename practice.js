//Once you complete a problem, open up Chrome and check the answer in the console.


var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only argument.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

var isTyler = function(name){
	return name === 'Tyler';
}


//Next problem



//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.

var getName = function(){
	return prompt("What you name is?");
}

//Next Problem



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

function welcome(){
	var nombre = getName();
	alert("Welcome, " + nombre);
	return 0;
}


//Next problem




//What is the difference between arguments and parameters?

//The ARGUMENT is what the actual value is that gets passed to a function in real life use
//The PARAMETER is the little formal guy that is used when the function is defined.


//Next problem



//What are all the falsy values in JavaScript and how do you check if something is falsy?


//0
//false
//NaN
//null
//""
//undefined
//Test for it with a comparison. !true or if(!x)



//Next Problem



//Create a function called myName that returns your name

function myName(){
	return "Richard McCumberbrie";
}

//Now save the function definition of myName into a new variable called newMyName

 var newMyName = myName;

//Now alert the result of invoking newMyName

alert (newMyName);

//Next problem



//Create a function called outerFn which returns an anonymous function which returns your name.

function outerFn(){
	return function(){
		return "Richard";
	}
}

//Now save the result of invoking outerFn into a variable called innerFn.

var innerFn = outerFn();

//Now invoke innerFn.

console.log(innerFn());