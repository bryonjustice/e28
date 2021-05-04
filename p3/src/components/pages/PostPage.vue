<template>
    <div id="post-page" v-cloak>
        <div v-if="resourceNotFound" v-cloak>
            <show-error></show-error>
        </div>

        <div v-else-if="post">
            <show-post
                v-bind:post="post"
                v-bind:reading="true"
            >
            </show-post>
        </div>
    </div>
</template>

<script>
import ShowPost from "@/components/ShowPost.vue";
import ShowError from "@/components/ShowError.vue";
export default {
    components: {
        "show-post": ShowPost,
        "show-error": ShowError,
    },
    props: {
        id: {
            type: String,
        },
    },
    computed: {
        post() {
            console.log('here: ' + this.id );
            return this.$store.getters.getPostById(this.id);
        },
        resourceNotFound() {
            return this.post == null;
        },
        posts() {
            return this.$store.state.posts;
        },
    },
};
</script>

<style>
    [v-cloak] {
        display: none;
    }
</style>