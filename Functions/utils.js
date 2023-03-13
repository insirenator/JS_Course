function showMessage(message) {
	let title_el = document.getElementById("title");
	title_el.innerText = message;
}

function showCustomisedMessage(name) {
	name  = capitalise(name);
	
	let msg = `Hello ${name}, My name is Shakeeb and I'm here to help you guys to get started with your music production journey. Check the links to explore other sections where I provide you with useful information like where to get started and resources (and guess what, all of it is free!)`;
	
	let para_el = document.querySelector(".para");
	para_el.innerText = msg;
}


// Function Expression
let capitalise = function (name) {
	return name.toUpperCase();
}