import { createStore, createLogger } from 'vuex';
import { axios } from "@/common/app.js";

// Only load the createLogger plugin when in development mode
const debug = process.env.NODE_ENV !== 'production';
const plugins = debug ? [createLogger({})] : [];

export const store = createStore({
    plugins,
    state() {
        return {
            posts: [],
            user: null,
        }
    },
    mutations: {
        setPosts(state, payload) {
            state.posts = payload;
        },
        setUser(state, payload) {
            state.user = payload;
        },
    },
    actions: {
        fetchPosts(context){
            axios.get("post").then(response => {
                context.commit('setPosts', response.data.post);
            });
        },
        authUser(context) {
            axios.post('auth').then((response) => {
                if (response.data.authenticated) {
                    context.commit('setUser', response.data.user);
                }
            });
        },
    },
    getters: {
        getPostById: (state) => (id) => {
            return state.posts.filter((post) => {
                return post.id == id;
            }, id)[0];
        }
    },
})