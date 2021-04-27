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
        }
    },
    mutations: {
        setPosts(state, payload) {
            state.posts = payload;
        }
    },
    actions: {
        fetchPosts(context){
            axios.get("post").then(response => {
                context.commit('setPosts', response.data.post);
            });
        }
    },
    getters: {
        getPostById: (state) => (id) => {
            return state.posts.filter((post) => {
                return post.id == id;
            }, id)[0];
        }
    },
})