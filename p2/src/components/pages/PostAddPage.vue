<template>
    <div class="add-post">
    <img src="@/assets/images/form.png" v-if="!successfulPost"/>
        <div v-if="successfulPost">
            <div class="card">
                <img v-bind:src="imgSrc" />
                <div class="blurb"> 
                    <span class="blurb">Voila!</span><br/>
                </div>
                <div class="id">
                    +<br/>
                </div>
                <div class="intro">
                    You have successfully added your post:<br/> 
                    <span class="blurb">{{ post.title }}</span><br/>
                    <a href="/">RETURN HOME</a>
                </div>
            </div>
        </div>

        <div v-else class="form">
            <label for="cover_blurb">COVER BLURB</label><br/>
            <input type="text" 
                   v-model="post.cover_blurb" 
                   id="cover_blurb" 
            /><br/>

            <label for="intro">INTRO</label><br/>
            <textarea type="text" 
                      v-model="post.intro" 
                      id="intro">
            </textarea><br/>

            <label for="title">TITLE</label><br/>
            <input type="text" 
                   v-model="post.title" 
                   id="title" /><br/>

            <label for="author">AUTHOR</label><br/>
            <input type="text" 
                   v-model="post.author" 
                   id="author" /><br/>

            <label for="published_date">PUBLISH DATE</label><br/>
            <input type="text" 
                   v-model="post.published_date" 
                   id="published_date" /><br/>

            <label for="body">POST BODY</label><br/>
            <textarea type="text" 
                      v-model="post.body" 
                      id="body">
            </textarea><br/>

            <label for="image">IMAGE</label><br/>
            <input type="text" 
                   v-model="post.image" 
                   id="image" /><br/>
            <button v-on:click="addPost">ADD BLOG POST</button>
        </div>
    </div>

</template>

<script>
import { axios } from "@/common/app.js";

export default {
    computed: {
        imgSrc() {
            try {
                return require("@/assets/images/" + this.post.image);
            } catch (e) {
                return require("@/assets/images/404.png");
            }
        },
    },
    data() {
        return {
            post: {
                title: "Battle of Waterloo",
                author: "Napoleon Bonaparte",
                published_date: "06-18-1815",
                cover_blurb: "The End",
                intro: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo",
                body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                image: "default.png",
                archive: 0,
            },
            successfulPost: false,
            errors: null,
        };
    },
    methods: {
        addPost() {
            axios.post('/post', this.post).then((response) => {
                if (response.data.errors) {
                    this.successfulPost = false;
                } else {
                    this.$emit("update-posts");
                    this.successfulPost = true; 
                }
            });
        },
    },
};
</script>

<style scoped>
    a {
        color: white;
        font-family: 'Bebas Neue', cursive;
        font-size: 12pt;
        text-decoration: none;

    }

    a:hover, a:active {
        text-decoration: underline;   
    }

    button {
        background-color: #bf3627;
        border: none;
        cursor: pointer;
        color: white;
        font-family: 'Bebas Neue', cursive;
        font-size: 18pt;
        margin: 8px 0;
        padding: 18px 20px;
        width: 200px;
    }

    div.add-post {
        background-color: black;
        box-shadow: 5px 10px 8px 10px #000000;
        margin: 0px 20px 50px 20px;
        min-width: 425px;
        width: 900px;
    }

    div.blurb {
        margin-top: -420px;
    }

    div.card {
        background-color: black;
        box-shadow: 5px 10px 8px 10px #000000;
        height: 650px;
        margin: 40px 20px 50px 220px;
        min-width: 425px;
        padding: 70px 0px 0px 0px;
        width: 425px;
    }

    div.form {
        color: white;
        font-family: 'Bebas Neue', cursive;
        height: 900px;
        padding: 20px 0px 0px 150px;
        text-align: left;
        width: 900px;
    }

    div.id {
        color: #bf3627;
        font-family: 'Bebas Neue', cursive;
        font-size: 140pt;
        margin: 200px 10px 0px 0px;
        text-align: right;
    }

    div.intro {
        font-size: 9pt;
        line-height: 2.5;
        margin: -50px 20px 0px 20px;
    }

    input[type=text], textarea {
        background-color: #2f2f3c;
        border: 0px solid #2f2f3c;
        box-sizing: border-box;
        color: white;
        display: inline-block;
        font-family: "Montserrat", sans-serif;
        font-size: 11pt;
        margin: 5px 0px 25px 0px;
        padding: 15px 20px;
        width: 80%;
    }

    label{
        font-size: 18pt;
    }

    span.blurb {
        color: white;
        font-family: 'Bebas Neue', cursive;
        font-size: 28pt;
    }
</style>