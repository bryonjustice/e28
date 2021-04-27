<template>
  <div id='home-page'>
    <posts-page></posts-page>
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
    computed: {
        posts() {
            return this.$store.state.posts;
        },
    },
}
</script>

<style>
  #home-page {
    display: flex;
    flex-wrap: wrap;
  }

</style>