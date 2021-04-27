import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/components/pages/HomePage.vue';
import PostPage from '@/components/pages/PostPage.vue';
import PostAddPage from '@/components/pages/PostAddPage.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: HomePage },
        { path: '/post/:id', component: PostPage, props: true },
        { path: '/post/new', component: PostAddPage },
    ]
});

createApp(App).use(router).mount('#app')
