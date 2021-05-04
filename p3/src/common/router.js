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

    // Exact the meta information for the routes - notably to check if requiresAuth 
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

    // Routing decision logic
    const decide = () => {
        if (requiresAuth && !store.state.user) {
            console.log('should redirect to denied');
            // If the visitor is trying to access a requiresAuth route 
            // and the visitor has not logged in 
            // then redirect the visitor to the denied page
            return '/denied';
        }
        else {
            console.log('passing through user: ' + store.state.user);
            return true;
        }
    }

    // If store does not have the user yet, dispatch the Vuex authUser action
    if (store.state.user === null) {
        store.dispatch('authUser').then(() => {
            decide();
        });
    } else {
        decide();
    }

});

export { router };