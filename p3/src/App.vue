<template>
  <div>
    <main-menu></main-menu>
    <router-view v-on:update-posts="loadPosts"></router-view>
  </div>
</template>

<script>
import MainMenu from "@/components/MainMenu.vue"; 

export default {
  name: 'App',
  components: {
    "main-menu": MainMenu,
  },
  computed: {
    posts() {
      return this.$store.state.posts;
    },
  },
  mounted() {
    this.loadPosts();
  },
  methods: {
    loadPosts() {
      this.$store.dispatch("fetchPosts");
    },
  },
}
</script>

<style src='@/assets/css/p2.css'></style>
<style>
  #app {
    margin: auto;
    text-align: center;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>
