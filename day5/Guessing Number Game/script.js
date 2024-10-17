document.addEventListener("DOMContentLoaded", function () {
    const guessInput = document.getElementById('guessInput');
    const guessButton = document.getElementById('guessButton');
    const result = document.getElementById('result');

    let randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(randomNumber)
    let attempts = 0;

    guessButton.addEventListener('click', function () {
        const userGuess = parseInt(guessInput.value);
        attempts++;

        if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
            result.textContent = 'Please enter a number between 1 and 100.';
            result.style.color = 'red';
        } else if (userGuess < randomNumber) {
            result.textContent = 'Too low! Try again.';
            result.style.color = 'orange';
        } else if (userGuess > randomNumber) {
            result.textContent = 'Too high! Try again.';
            result.style.color = 'orange';
        } else {
            result.textContent = `Congratulations! You guessed it in ${attempts} attempts.`;
            result.style.color = 'green';
            guessButton.disabled = true;
        }
    });
});
