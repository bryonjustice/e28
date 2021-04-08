import { createApp } from 'vue'
import App from './App.vue'
// Import just the methods we need from the VueRouter module
import { createRouter, createWebHistory } from 'vue-router';

import HomePage from '@/components/pages/HomePage.vue';
import ProductsPage from '@/components/pages/ProductsPage.vue';
import ProductPage from '@/components/pages/ProductPage.vue';
import ProductCreatePage from '@/components/pages/ProductCreatePage.vue';
import CategoriesPage from '@/components/pages/CategoriesPage.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: HomePage },
        { path: '/products', component: ProductsPage },
        { path: '/product/:id', component: ProductPage, props: true },
        { path: '/product/new', component: ProductCreatePage },
        { path: '/categories', component: CategoriesPage },
    ]
});

createApp(App).use(router).mount('#app')
