/*
	A 'variable' is a location in memory that can be used 
	to store a value. The value can be a number, a character
	or a string. Javascript supports many other datatypes.

	To declare a variable we can use either 'var' or 'let'
	keyword followed by the name of the variable.
	To can provide a value too by using a '=' or u can just 
	leave it. In this case it will be 'undefined'.

	look at the code below.
*/

var aNumber = 149;
console.log("aNumber = ", aNumber);

// You can declare multiple variables by separating them by commas.

var num1 = 9,
	num2 = 12,
	num3 = 14;

console.log("num1 = ", num1,
			"num2 = ", num2,
			"num3 = ", num3);

/*
	Naming Convention for variables : 

	1. Keywords cannot be used to name variables:
		e.g. 'let', 'var', 'const', etc.

	2. The variable name must start with one of these :
		underscore(_), dollar($), any letter ([a-zA-Z] or unicode letter).

	3. After that the variable can contain any number of 
		underscore(_), dollar($), any letter ([a-zA-Z] or unicode letter)
		or any number([0-9]). 
*/

// Using 'let' to declare a variable.
/* 
	'let' keyword is preferred over 'var' because :
	1. 'var' declares a variable on global scope.
	2. 'var' can be redeclared which is not good.
*/

// Constants can be created using 'const' keyword.

const constVar = 10;
console.log(constVar);

// Reassigning a value to a constant causes error.

// The following line will give an error.
// constVar = 20;