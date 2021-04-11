<template>
    <div id="post-page">
        <div>
            <show-post
                v-bind:post="post"
            ></show-post>
        </div>
    </div>
</template>

<script>
import ShowPost from "@/components/ShowPost.vue";
export default {
    components: {
        "show-post": ShowPost,
    },
    props: {
        id: {
            type: String,
        },
        posts: {
            type: Array,
            default: null,
        },
    },
    computed: {
        post() {
            return this.posts.filter((post) => {
                return post.id == this.id;
            }, this.id)[0];
        },
    },
};
</script>

<style>

</style>