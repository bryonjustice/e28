<template>
    <div id="main-menu">
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
        <show-banner></show-banner>
    </div>
</template>

<script>
import ShowBanner from "@/components/ShowBanner.vue"

export default {
    components: {
        "show-banner": ShowBanner,
    },
    data(){
        return{
            links: ['HOME', 'ADD A POST'],
            paths: {
                HOME: '/',
                'ADD A POST': '/post/new',
            },
        };
    },
}
</script>

<style scoped>
    div {
        color: black;
        font-family: 'Bebas Neue', cursive;
        height: 80px;
        width: 100vw;
        text-align: left;
    }

    ul {
        list-style-type: none;
    }

    a {
        color: white;
        text-decoration: none;
        padding: 20px;
    }

    li a:hover, li a:active {
        text-decoration: underline;   
    }

</style>