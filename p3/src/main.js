import { createApp } from 'vue'
import { store } from '@/common/store.js';
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/components/pages/HomePage.vue';
import PostPage from '@/components/pages/PostPage.vue';
import PostAddPage from '@/components/pages/PostAddPage.vue';
import AccountPage from '@/components/pages/AccountPage.vue';
import RegisterPage from '@/components/pages/RegisterPage.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: HomePage },
        { path: '/post/:id', component: PostPage, props: true },
        { path: '/post/new', component: PostAddPage },
        { path: '/account', component: AccountPage },
        { path: '/register', component: RegisterPage },
    ]
});

createApp(App).use(router).use(store).mount('#app')
