<template>
  <div id='home-page'>
    <posts-page
      v-bind:posts="posts">
    </posts-page>
  </div>
</template>

<script>
import PostsPage from "@/components/pages/PostsPage.vue"; 

export default {
    components: {
        "posts-page": PostsPage,
    },
    props: {
        posts: {
            type: Array,
            default: null,
        }
    },
}
</script>

<style>

</style>