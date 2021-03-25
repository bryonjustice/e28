let WordScramble = {
    data() {
        return {
            words: [
                ['apple', 'Sometimes red, sometimes delicious'],
                ['washington', 'Rushmore’s left edge'],
                ['pumpkin', 'Halloween’s favorite fruit'],
                ['football', 'Play with your hands or feet, depending on your location']
            ],
            gameStarted: false,
            player: '',
            word: '',
            clue: '',
            guess: '',
            lastWord: '',
            gameResult: false,
            correct: false,
        }
    },
    computed: {
        scrambledWord() {
            let wordAsArray = this.word.split('');
            wordAsArray.sort(() => Math.random() - 0.5);
            return wordAsArray.join('');
        }
    },
    methods: {
        playGame() {
            this.gameStarted = true;
            this.newGame();
        },
        submitAnswer() {
            this.correct = this.guess.toLowerCase() == this.word;
            this.gameResult = true;
        },
        newGame() {
            this.gameResult = false;
            this.guess = '';

            while (this.word === this.lastWord) {
                this.choice = this.words[Math.floor(Math.random() * this.words.length)];
                this.word = this.choice[0];
                this.clue = this.choice[1];
            }

            this.lastWord = this.word;
        }
    }
}

const GameResult = {
    name: 'GameResult',
    props: {
        correct: {
            type: Boolean,
            default: false,
        },
        incorrect: {
            type: Boolean,
            default: false,
        }
    },
    data() {
        return {
        }
    },
    methods: {
        // placeholder
    },
    template: '#game-result',
}

const app = Vue.createApp(WordScramble).component('game-result',GameResult).mount('#app');
