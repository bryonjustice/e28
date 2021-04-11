<template>
    <div class="add-post">
        <img src="@/assets/images/form.png" />
        <div class="form">
            <label for="cover_blurb">COVER BLURB</label><br/>
            <input 
                type="text" 
                v-model="post.cover_blurb" 
                id="cover_blurb" 
                placeholder="Text"
            /><br/>

            <label for="intro">INTRO</label><br/>
            <input type="text" v-model="post.intro" id="intro" /><br/>

            <label for="title">TITLE</label><br/>
            <input type="text" v-model="post.title" id="title" /><br/>

            <label for="author">AUTHOR</label><br/>
            <input type="text" v-model="post.author" id="author" /><br/>

            <label for="published_date">PUBLISH DATE</label><br/>
            <input type="text" v-model="post.published_date" id="published_date" /><br/>

            <label for="body">POST BODY</label><br/>
            <textarea type="text" v-model="post.body" id="body"></textarea><br/>

            <label for="image">IMAGE</label><br/>
            <input type="text" v-model="post.image" id="image" /><br/>
        </div>
        <button v-on:click="addPost">ADD BLOG POST</button>
    </div>
</template>

<script>
import { axios } from "@/common/app.js";

export default {
    data() {
        return {
            post: {
                cover_blur: "",
                intro: "",
                title: "",
                author: "",
                published_date: "",
                body: "",
                image: "",
                archive: false
            },
        };
    },
    methods: {
        addPost() {
            axios.post('/post', this.post).then((response) => {
                if (response.data.errors) {
                    this.errors = response.data.errors;
                    this.showConfirmation = false;
                } else {
                    this.$emit("update-posts");
                    this.showConfirmation = true;
                }
            })
        },
    },
};
</script>

<style scoped>
    div.add-post {
        background-color: black;
        height: 1200px;
        margin: 0px 20px 50px 20px;
        min-width: 425px;
        box-shadow: 5px 10px 8px 10px #000000;
        width: 900px;
    }

    div.form {
        color: white;
        font-family: 'Bebas Neue', cursive;
        padding: 20px 0px 0px 150px;
        text-align: left;
    }

    input[type=text], textarea {
        background-color: #2f2f3c;
        border: 0px solid #2f2f3c;
        box-sizing: border-box;
        color: white;
        display: inline-block;
        font-family: "Montserrat", sans-serif;
        font-size: 14pt;
        margin: 5px 0px 25px 0px;
        padding: 15px 20px;
        width: 80%;
    }

    label{
        font-size: 18pt;
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
</style>