let guess = prompt("Guess a number between 1 and 10");
let randomNum = Math.floor((Math.random() * 10) + 1);
// guess = parseInt(guess);
if (guess < 1 || guess > 10) {
    alert("You guess is out of range, Please try again.");
} else if (guess == randomNum) {
    alert("You guessed correctly!");
} else {
    alert("Sorry, The number was " + randomNum + ".");
}