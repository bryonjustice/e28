<template>
    <div id="posts-page">
        <router-link
            v-for="post in posts"
            v-bind:to="'/post/' + post.id"
            v-bind:key="post.id">
                <show-post v-bind:post="post"></show-post>
        </router-link>
    </div>
</template>

<script>
import ShowPost from "@/components/ShowPost.vue";

export default {
    components: {
        "show-post": ShowPost,
    },
    props: {
        posts: {
            type: Array,
            default: null,
        },
    }
}
</script>

<style>

</style>