<template>
    <fieldset v-bind:class="{ correct: correct, incorrect: !correct }">
        <legend>GAME RESULT</legend>
        <div v-if='correct'>WIN!
            <button v-on:click='$emit("new-game")'>NEW GAME</button>
        </div>
        <div v-else>OOPS, TRY AGAIN. </div>
    </fieldset>
</template>

<script>
export default {
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
};
</script>

<style>
legend {
  padding-top: 20px;
}

.correct {
  background-color: green;
  color: white;
  padding: 20px;
}

.incorrect {
  background-color: red;
  color: white;
}

</style>
