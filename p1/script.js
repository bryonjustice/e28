// Define the options of our application
const Game = {
    data() {
        return {
            playerName: '',
            gameStarted: false,
            playerThrow: null,
            isNotRock: true,
            isNotPaper: true,
            isNotScissors: true,
            opponentIsNotRock: true,
            opponentIsNotPaper: true,
            opponentIsNotScissors: true,
            displayGameResult: '',
            isWin: false,
            isLoss: false,
            isDraw: false,
            playerScore: 0,
            computerScore: 0,
            games: [],
        }
    },
    methods: {
        startGame() {
            this.playerName = this.playerName.toLowerCase();
            this.gameStarted = true;
        },
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

            // timestamp the result
            let gameFullDateTime = new Date();
            let gameDate = gameFullDateTime.toLocaleDateString();
            let gameTime = gameFullDateTime.toLocaleTimeString();
            let gameResult = '';

            // both players throw
            let playerCurrentThrow = this.playerThrow;
            let opponentCurrentThrow = this.resultOpponentThrow();

            // show the player's throw
            if (playerCurrentThrow == 'Rock') {
                this.isNotRock = false;
            } else if (playerCurrentThrow == 'Paper') {
                this.isNotPaper = false;
            } else {
                this.isNotScissors = false;
            }

            // show the opponent's throw
            if (opponentCurrentThrow == 'Rock') {
                this.opponentIsNotRock = false;
            } else if (opponentCurrentThrow == 'Paper') {
                this.opponentIsNotPaper = false;
            } else {
                this.opponentIsNotScissors = false;
            }

            // compare handsigns and display the result of the game
            if (playerCurrentThrow === opponentCurrentThrow) {
                gameResult = 'draw';
                this.displayGameResult = 'draw! '
                this.isDraw = true;
            } else if (playerCurrentThrow === 'Rock' && opponentCurrentThrow === 'Scissors') {
                gameResult = 'win';
                this.displayGameResult = 'you won! '
                this.isWin = true;
                this.playerScore = this.playerScore + 1;
            } else if (playerCurrentThrow === 'Scissors' && opponentCurrentThrow === 'Paper') {
                gameResult = 'win';
                this.displayGameResult = 'you won! '
                this.isWin = true;
                this.playerScore = this.playerScore + 1;
            } else if (playerCurrentThrow === 'Paper' && opponentCurrentThrow === 'Rock') {
                gameResult = 'win';
                this.displayGameResult = 'you won! '
                this.isWin = true;
                this.playerScore = this.playerScore + 1;
            } else {
                gameResult = 'loss';
                this.displayGameResult = 'you lost! '
                this.isLoss = true;
                this.computerScore = this.computerScore + 1;
            }

            // record the game for history
            this.games.push({
                result: gameResult.toLowerCase(),
                playerThrow: playerCurrentThrow.toUpperCase(),
                computerThrow: opponentCurrentThrow.toUpperCase(),
                date: gameDate,
                time: gameTime,
            });

            console.log(this.games)

            // reset for another round
            this.playerThrow = '';
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
        },
        clearHistory() {
            // reset the score
            this.playerScore = 0;
            this.computerScore = 0;
            // refresh the games 
            this.games = [];
            console.log('clearing history');
        }
    }
}

const GameHistory = {
    name: 'GameHistory',
    props: {
        playerScore: {
            type: Number,
            default: 0
        },
        computerScore: {
            type: Number,
            default: 0
        },
        result: {
            type: String,
        },
        playerThrow: {
            type: String,
        },
        playerName: {
            type: String,
        },
        computerThrow: {
            type: String,
        },
        index: {
            type: Number,
        },
        date: {
            type: String,
        },
        time: {
            type: String,
        },
    },
    data() {
        return {
        }
    },
    methods: {
        // placeholder
    },
    template: '#game-history',
}

// Create a new Vue instance using our options
const app = Vue.createApp(Game).component('game-history',GameHistory).mount('#app');