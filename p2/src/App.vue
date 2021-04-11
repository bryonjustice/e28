<template>
  <div>
    <nav>
      <ul>
        <li>
          <router-link
              v-for="link in links"
              v-bind:key="link"
              v-bind:to="paths[link]"
          > {{ link }} 
          </router-link>
        </li>
      </ul>
    </nav>
    <router-view
      v-bind:posts="posts"
      v-on:update-posts="loadPosts">
    </router-view>
  </div>
</template>

<script>
import { axios } from "@/common/app.js";

export default {
  name: 'App',
  data(){
    return{
      posts: [],
      links: ['home', 'add a post'],
      paths: {
          home: '/',
          'add a post': '/post/new',
      },
    };
  },
  mounted(){
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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
