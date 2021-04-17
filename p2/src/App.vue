<template>
  <div>
    <main-menu></main-menu>
    <router-view
      v-bind:posts="posts"
      v-on:update-posts="loadPosts">
    </router-view>
  </div>
</template>

<script>
import { axios } from "@/common/app.js";
import MainMenu from "@/components/MainMenu.vue"; 

export default {
  name: 'App',
  components: {
    "main-menu": MainMenu,
  },
  data(){
    return {
      posts: [],
    };
  },
  mounted() {
    this.loadPosts();
  },
  methods: {
    loadPosts() {
      axios.get("post").then(response => {
        this.posts = response.data.post;
      });
    },
  },
}
</script>

<style src='@/assets/css/p2.css'></style>
<style>
  #app {
    margin: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
}
</style>
