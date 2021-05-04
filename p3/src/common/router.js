import { createRouter, createWebHistory } from 'vue-router';
import { store } from '@/common/store';

// Define all the routes of the application
const routes = [
    {
        path: '/',
        component: () => import('@/components/pages/HomePage.vue'),
    },
    {
        path: '/post/:id',
        component: () => import('@/components/pages/PostPage.vue'),
        props: true,
    },
    {
        path: '/post/new',
        component: () => import('@/components/pages/PostAddPage.vue'),
        // meta requires authentication
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/account',
        component: () => import('@/components/pages/AccountPage.vue'),
        props: true,
    },
    {
        path: '/register',
        component: () => import('@/components/pages/RegisterPage'),
    },
    {
        // Redirect the user to this page if they do not have permissions.
        path: '/denied',
        component: () => import('@/components/pages/AccessDeniedPage.vue'),
    },

];

// Initialize the router
const router = createRouter({
    history: createWebHistory(),
    routes,
});

// Notes from navigation-guards 
// Ref: https://router.vuejs.org/guide/advanced/navigation-guards.html
// Ref: https://router.vuejs.org/guide/advanced/meta.html#route-meta-fields

// beforeEach executes code before a route is resolved
router.beforeEach(async (to) => {

    // Exact the meta information from the routes
    // Notably check for requiresAuth
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

    // decision logic on routing
    const decide = (user) => {
        if (requiresAuth && !user) {
            // Redirect vistor if they to access requiresAuth route without logging in.
            return '/denied';
        } else {
            // Open access or authorized user
            return true;
        }
    }

    // If the store user is null, dispatch the Vuex authUser action
    if (store.state.user === null) {
        let authUser = await store.dispatch('authUser');
        if (authUser !== null) {
            return decide(store.state.user);
        }
    } else {
        return decide(store.state.user);
    }
});

export { router };