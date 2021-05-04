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
router.beforeEach(async (to, from, next) => {

    // Exact the meta information from the above routes
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

    if (requiresAuth && !store.state.user) {
        // If attempting to access a requiresAuth route and the visitor is not logged in, 
        // then redirect the visitor to the "Access Denied" page.
        next('/denied');
    }
    else {
        // In all other circumstances, send the visitor to the route requested
        next();
    }
});

export { router };