<template>
    <div>
        <ul>
            <li
                v-for="(error, index) in errors"
                v-bind:key="index"
                class="form-feedback-error"
            >
                {{ error }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: ["errors"],
};
</script>

<style scoped>
div {
    color: #bf3627;
    margin: -30px 0px 0px 0px;
}
</style>