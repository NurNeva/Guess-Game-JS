let attempts = 0;
let randomNumbers = Math.floor(Math.random() * 100 + 1);
let gameOver = false;

console.log(randomNumbers);

const guess = document.getElementById("guess");
const submit = document.getElementById("submit");
const text = document.getElementById("resultText");
const attemptsText = document.getElementById("attempts"); // Buradaki hatayı düzelttik.
const restartButton = document.getElementById("restart");
console.log(guess, submit);


function checkGuess() {
    if(gameOver) return;

    const userValue = Number(guess.value);
    attempts++;

    if (isNaN(userValue) || userValue < 1 || userValue > 100) {
        
        text.textContent = "Please enter a valid number between 1 and 100.";
        return; 
    }


    if (userValue === randomNumbers) {
        text.textContent = "Congrats!";
        gameOver = true;
    } else if (userValue < randomNumbers) {
        text.textContent = "Too low! Try again!";
    } else {
        text.textContent = "Too high! Try again.";
    }

    attemptsText.textContent = "Attempts: " + attempts;

      // Tahmin kutusunu temizle
      guess.value = "";
}

// Event Listeners
submit.addEventListener("click", checkGuess);
restartButton.addEventListener("click", function() {
  
    attempts = 0;
    randomNumbers = Math.floor(Math.random() * 100 + 1);
    console.log(randomNumbers);  
    text.textContent = ""; 
    attemptsText.textContent = ""; 
    guess.value = ""; // Tahmin kutusunu temizle
    gameOver = false; 
});
