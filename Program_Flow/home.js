// Program flow in JavaScript
let date = new Date();

let hour = date.getHours();

let greeting;

if(hour >= 6 && hour < 12) {
	greeting = "Morning.";
}

else if (hour >= 12 && hour < 16) {
	greeting = "Afternoon.";
}

else {
	greeting = "Evening.";
}

showMessage("Good " + greeting + " Welcome to AudioLode.");
