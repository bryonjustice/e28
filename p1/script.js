// Define the options of our application
const Game = {
    data() {
        return {
            playerName: 'Bryon',
            playerThrow: null,
            displayGamePlayerThrow: null,
            displayGameOpponentThrow: null,
            displayGameResult: null,
            isWin: false,
            isLoss: false
        }
    },
    methods: {
        gameResult() {
            // both players throw
            let playerCurrentThrow = this.playerThrow;
            let opponentCurrentThrow = this.resultOpponentThrow();

            // compare handsigns and display the result of the game
            if (playerCurrentThrow === opponentCurrentThrow) {
                this.displayGameResult = "DRAW! Both players selected " + playerCurrentThrow;
                this.isWin = false;
                this.isLoss = false;
            } else if (playerCurrentThrow === "Rock" && opponentCurrentThrow === "Scissors") {
                this.displayGameResult = "You WIN! " + playerCurrentThrow + " breaks " + opponentCurrentThrow
                this.isWin = true;
                this.isLoss = false;
            } else if (playerCurrentThrow === "Scissors" && opponentCurrentThrow === "Paper") {
                this.displayGameResult = "You WIN! " + playerCurrentThrow + " cuts " + opponentCurrentThrow
                this.isWin = true;
                this.isLoss = false;
            } else if (playerCurrentThrow === "Paper" && opponentCurrentThrow === "Rock") {
                this.displayGameResult = "You WIN! " + playerCurrentThrow + " covers " + opponentCurrentThrow
                this.isWin = true;
                this.isLoss = false;
            } else {
                this.displayGameResult = "You LOSE! " + opponentCurrentThrow + " beats " + playerCurrentThrow
                this.isWin = false;
                this.isLoss = true;
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
