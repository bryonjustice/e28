<template>
    <div id="posts-page">
        <router-link
            v-for="post in posts"
            v-bind:to="'/post/' + post.id"
            v-bind:key="post.id"
        >
            <show-post v-bind:post="post" 
                       v-bind:reading="false"
            ></show-post>
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
    },
}
</script>

<style scoped>
    a {
        color: white;
        text-decoration: none;
    }

    #posts-page {
        display: flex;
        flex-wrap: wrap;
        max-width: 1000px;
    }

</style>