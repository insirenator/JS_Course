// Tyoes in JavaScript

// 1. Numbers

let intNum = 20;
console.log("This is an Integer = ", intNum);

let floatNum = 20.2;
console.log("This is a float = ", floatNum);

let eFloat = 2e4;
console.log("This is an eFloat = ", eFloat);

// 2. Strings

let str1 = "Hello";
let str2 = "World";

console.log(str1, "\n", str2);

let str = str1 + str2; // Concatenation
console.log(str)

showMessage(str);

let name = "AudioLode";
let greeting = `Welcome to ${name}`;
showMessage(greeting);

// 3. Objects

let user = {
	name : "Shakeeb",
	age : 20,
};

showMessage(typeof user);
showMessage(`Name : ${user.name} Age : ${user.age}`);