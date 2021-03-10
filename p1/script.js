// Define the options of our application
const Game = {
    data() {
        return {
            playerName: 'bryon',
            playerThrow: null,
            displayGamePlayerThrow: null,
            displayGameOpponentThrow: null,
            displayGameResult: null,
            isNotRock: true,
            isNotPaper: true,
            isNotScissors: true,
            opponentIsNotRock: true,
            opponentIsNotPaper: true,
            opponentIsNotScissors: true,
            isWin: false,
            isLoss: false,
            isDraw: false,
            playerScore: 0,
            computerScore: 0,
        }
    },
    methods: {
        gameResult() {
            // reset game status styling and hide all possible selections
            this.isDraw = false;
            this.isWin = false;
            this.isLoss = false;

            this.isNotRock = true;
            this.isNotPaper = true;
            this.isNotScissors = true;
            this.opponentIsNotRock = true;
            this.opponentIsNotPaper = true;
            this.opponentIsNotScissors = true;

            // both players throw
            let playerCurrentThrow = this.playerThrow;
            let opponentCurrentThrow = this.resultOpponentThrow();

            // show the player's throw
            if (playerCurrentThrow == "Rock") {
                this.isNotRock = false;
            } else if (playerCurrentThrow == "Paper") {
                this.isNotPaper = false;
            } else {
                this.isNotScissors = false;
            }

            // show the opponent's throw
            if (opponentCurrentThrow == "Rock") {
                this.opponentIsNotRock = false;
            } else if (opponentCurrentThrow == "Paper") {
                this.opponentIsNotPaper = false;
            } else {
                this.opponentIsNotScissors = false;
            }


            // compare handsigns and display the result of the game
            if (playerCurrentThrow === opponentCurrentThrow) {
                this.displayGameResult = "draw! "
                this.isDraw = true;
            } else if (playerCurrentThrow === "Rock" && opponentCurrentThrow === "Scissors") {
                this.displayGameResult = "you won! "
                this.isWin = true;
                this.playerScore = this.playerScore + 1;
            } else if (playerCurrentThrow === "Scissors" && opponentCurrentThrow === "Paper") {
                this.displayGameResult = "you won! "
                this.isWin = true;
                this.playerScore = this.playerScore + 1;
            } else if (playerCurrentThrow === "Paper" && opponentCurrentThrow === "Rock") {
                this.displayGameResult = "you won! "
                this.isWin = true;
                this.playerScore = this.playerScore + 1;
            } else {
                this.displayGameResult = "you lost! "
                this.isLoss = true;
                this.computerScore = this.computerScore + 1;
            }

            // display the most recent choices and reset for another round
            this.displayGamePlayerThrow = "Your current throw: " + playerCurrentThrow;
            this.displayGameOpponentThrow = "Opponent throws: " + opponentCurrentThrow;
            this.playerThrow = "";
        },
        resultOpponentThrow() {
            // randomly generate a selection: 0, 1, 2
            let opponentCurrentThrow = this.randomSelection();

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
        },
        randomSelection() {
            return Math.floor(Math.random() * Math.floor(3));
        }
    }
}

// Create a new Vue instance using our options
const app = Vue.createApp(Game).mount('#app');