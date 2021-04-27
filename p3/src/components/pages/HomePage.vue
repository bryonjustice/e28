<template>
  <div id='home-page'>
    <posts-page
      v-bind:posts="posts">
    </posts-page>
    <blog-team></blog-team>
  </div>
</template>

<script>
import PostsPage from "@/components/pages/PostsPage.vue"; 
import BlogTeam from "@/components/BlogTeam.vue";

export default {
    components: {
        "posts-page": PostsPage,
        "blog-team": BlogTeam,
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
  #home-page {
    display: flex;
    flex-wrap: wrap;
  }

</style>