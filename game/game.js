function gameResult() {
    const currentGame = document.getElementById("gameResult");
    const currentGamePlayerThrow = document.getElementById("gamePlayerThrow");
    const nextGamePlayerThrow = document.getElementById("playerThrow");

    // both players throw
    let currentPlayerThrow = document.getElementById('playerThrow').value;
    let currentOpponentThrow = resultOpponentThrow();

    // compare handsigns and display the result of the game
    if (currentPlayerThrow === currentOpponentThrow) {
        currentGame.innerHTML = "DRAW! Both players selected " + currentPlayerThrow;
        currentGame.className = "tie";
    } else if (currentPlayerThrow === "Rock" && currentOpponentThrow === "Scissors") {
        currentGame.innerHTML = "You WIN! " + currentPlayerThrow + " breaks " + currentOpponentThrow
        currentGame.className = "win";
    } else if (currentPlayerThrow === "Scissors" && currentOpponentThrow === "Paper") {
        currentGame.innerHTML = "You WIN! " + currentPlayerThrow + " cuts " + currentOpponentThrow
        currentGame.className = "win";
    } else if (currentPlayerThrow === "Paper" && currentOpponentThrow === "Rock") {
        currentGame.innerHTML = "You WIN! " + currentPlayerThrow + " covers " + currentOpponentThrow
        currentGame.className = "win";
    } else {
        currentGame.innerHTML = "You LOSE! " + currentOpponentThrow + " beats " + currentPlayerThrow
        currentGame.className = "lose";
    }

    // display the most recent choice and reset for another round
    currentGamePlayerThrow.innerHTML = "Your current throw: " + currentPlayerThrow;
    nextGamePlayerThrow.value = "";
}

function resultOpponentThrow() {
    // randomly generate a selection: 0, 1, 2
    let currentOpponentThrow = randomSelection();
    let displayCurrentOpponentThrow = document.getElementById('gameOpponentThrow');

    // convert the random selection to a hand gesture and return the result
    switch (currentOpponentThrow) {
        case 0:
            currentOpponentThrow = 'Rock';
            displayCurrentOpponentThrow.innerHTML = "Opponent throws: " + currentOpponentThrow;
            return currentOpponentThrow;
        case 1:
            currentOpponentThrow = 'Paper';
            displayCurrentOpponentThrow.innerHTML = "Opponent throws: " + currentOpponentThrow;
            return currentOpponentThrow;
        case 2:
            currentOpponentThrow = 'Scissors';
            displayCurrentOpponentThrow.innerHTML = "Opponent throws: " + currentOpponentThrow;
            return currentOpponentThrow;
    }
}

function randomSelection() {
    return Math.floor(Math.random() * Math.floor(3));
}

document.getElementById('playerThrow').addEventListener("change", gameResult);