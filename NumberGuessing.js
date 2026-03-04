const output = document.getElementById("output");
const minNum = 1;
const maxNum = 100;
let randomNumber = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
let attempts = 0;
while (true) {
    checkGuess.onclick = function() {
        const userGuess = parseInt(document.getElementById("checkGuess").value);
        attempts++;
        if(userGuess === randomNumber){
            output.innerHTML = `Congratulations! You've guessed the number ${randomNumber} in ${attempts} attempts.`;
        }
        else if(userGuess < randomNumber){
            output.innerHTML = "Too low! Try again.";
        }
        else if(userGuess > randomNumber){
            output.innerHTML = "Too high! Try again.";
        }
        else if (isNaN(userGuess)){
            output.innerHTML = "Please enter a valid number.";
        }
        else if (userGuess < minNum || userGuess > maxNum){
            output.innerHTML = "Please enter a number between 1 and 100.";
        }
        else{
            output.innerHTML = "Invalid input. Please try again.";
        }
    }
    output.innerHTML = "Welcome to the Number Guessing Game! Try to guess the number between 1 and 100.";
}