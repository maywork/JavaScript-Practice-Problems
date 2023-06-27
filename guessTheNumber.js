let randomNum = Math.floor((Math.random() * 10) + 1);
let guess;
// guess = parseInt(guess);
let score = 10;

while (guess != randomNum) {
    score -= 1;
    guess = prompt("Guess a number between 1 and 10");
    if (guess == randomNum) {
        console.log("Congratulations! You guessed the right number.");
        console.log(`You guessed the actual number in ${10 - score} chances.`);
    } else if (guess > randomNum && guess < 10) {
        console.log("Your guess is higher than the actual number.");
    } else if (guess < randomNum && guess > 0) {
        console.log("Your guess is lower than the actual number.");
    } else {
        console.log("Enter number between 1 to 10.");
    }
}




// if (guess < 1 || guess > 10) {
//     out of range
// } else if (guess == randomNum) {
//     correct
// } else {
//     incorrect
// }