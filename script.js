// Keep these at the top level so all functions can see them
let secretNumber = Math.floor(Math.random() * 100) + 1;
const checkBtn = document.getElementById('checkButton');
const resetBtn = document.getElementById('resetButton');
const messageDisplay = document.getElementById('displayMessage');
const inputField = document.getElementById('guessInput');

// 1. Check Button Logic
checkBtn.addEventListener('click', () => {
    const userGuess = Number(inputField.value);

    if (userGuess === secretNumber) {
        messageDisplay.textContent = "Correct! You won! 🎉";
        messageDisplay.style.color = "green";
        // Show the reset button only when the player wins
        resetBtn.style.display = "block"; 
        checkBtn.disabled = true;
    } else {
        messageDisplay.textContent = userGuess > secretNumber ? "Too high!" : "Too low!";
        messageDisplay.style.color = "orange";
    }
});

// 2. Reset Button Logic
resetBtn.addEventListener('click', () => {
    // Generate a new number for a new game
    secretNumber = Math.floor(Math.random() * 100) + 1;
    
    // Clean the UI
    messageDisplay.textContent = "";
    inputField.value = "";
    resetBtn.style.display = "none";
    checkBtn.disabled = false;
    
    console.log("New game started!");
});
// Lógica para el botón de Reset
resetBtn.addEventListener('click', () => {
    // 1. Generamos un nuevo número aleatorio
    secretNumber = Math.floor(Math.random() * 100) + 1;

    // 2. Limpiamos la interfaz (UI)
    messageDisplay.textContent = "";
    inputField.value = "";
    
    // 3. (Opcional) Regresamos el cursor al input automáticamente
    inputField.focus();
    
    console.log("Game has been reset. New number generated!");
});

// Function to reset the game state
const resetGame = () => {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    messageDisplay.textContent = "";
    inputField.value = "";
    checkBtn.disabled = false;
    inputField.focus();
    console.log("Game auto-reset complete.");
};

// Now your Check Button uses it:
checkBtn.addEventListener('click', () => {
    const userGuess = Number(inputField.value);
    if (userGuess === secretNumber) {
        messageDisplay.textContent = "You won! Starting new game...";
        setTimeout(resetGame, 2000); // Resets after 2 seconds
    }
    // ... rest of your logic
});

// And your Reset Button still works too:
resetBtn.addEventListener('click', resetGame);