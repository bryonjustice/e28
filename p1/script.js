// Define the options of our application
const Game = {
    data() {
        return {
            playerName: 'Bryon'
        }
    }
}

// Create a new Vue instance using our options
const app = Vue.createApp(Game).mount('#app');





// Original js to be converted
function gameResult() {
    const gameResult = document.getElementById("gameResult");
    const gameResultPlayerThrow = document.getElementById("gamePlayerThrow");
    const gameResultOpponentThrow = document.getElementById('gameOpponentThrow');
    const playerNextThrow = document.getElementById("playerThrow");

    // both players throw
    let playerCurrentThrow = document.getElementById('playerThrow').value;
    let opponentCurrentThrow = resultOpponentThrow();

    // compare handsigns and display the result of the game
    if (playerCurrentThrow === opponentCurrentThrow) {
        gameResult.innerHTML = "DRAW! Both players selected " + playerCurrentThrow;
        gameResult.className = "tie";
    } else if (playerCurrentThrow === "Rock" && opponentCurrentThrow === "Scissors") {
        gameResult.innerHTML = "You WIN! " + playerCurrentThrow + " breaks " + opponentCurrentThrow
        gameResult.className = "win";
    } else if (playerCurrentThrow === "Scissors" && opponentCurrentThrow === "Paper") {
        gameResult.innerHTML = "You WIN! " + playerCurrentThrow + " cuts " + opponentCurrentThrow
        gameResult.className = "win";
    } else if (playerCurrentThrow === "Paper" && opponentCurrentThrow === "Rock") {
        gameResult.innerHTML = "You WIN! " + playerCurrentThrow + " covers " + opponentCurrentThrow
        gameResult.className = "win";
    } else {
        gameResult.innerHTML = "You LOSE! " + opponentCurrentThrow + " beats " + playerCurrentThrow
        gameResult.className = "lose";
    }

    // display the most recent choices and reset for another round
    gameResultPlayerThrow.innerHTML = "Your current throw: " + playerCurrentThrow;
    gameResultOpponentThrow.innerHTML = "Opponent throws: " + opponentCurrentThrow;
    playerNextThrow.value = "";
}

function resultOpponentThrow() {
    // randomly generate a selection: 0, 1, 2
    let opponentCurrentThrow = randomSelection();

    // convert the random selection to a hand gesture and return the result
    switch (opponentCurrentThrow) {
        case 0:
            opponentCurrentThrow = 'Rock';
            return opponentCurrentThrow;
        case 1:
            opponentCurrentThrow = 'Paper';
            return opponentCurrentThrow;
        case 2:
            opponentCurrentThrow = 'Scissors';
            return opponentCurrentThrow;
    }
}

function randomSelection() {
    return Math.floor(Math.random() * Math.floor(3));
}

document.getElementById('playerThrow').addEventListener("change", gameResult);