// Declare variables
let targetNumber = Math.floor(Math.random() * 100) + 1,
guess = NaN;

do{
// Ask for a guess
guess = prompt("What's your guess?");
// Check guess

}while(guess != targetNumber);

alert("You won!");

