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
                    You have successfully added your post.<br/> 
                    <a href="/">RETURN HOME</a>
                </div>
            </div>
        </div>

        <div v-else class="form">
            <label for="cover_blurb">COVER BLURB</label><br/>
            <input 
                type="text" 
                v-model="post.cover_blurb" 
                id="cover_blurb" 
                required="required"
                placeholder="Short title to appear on homepage [hint: 3-100 characters]"
                v-on:blur="validate"
            /><br/>
            <error-field
                v-if="errors && 'cover_blurb' in errors"
                v-bind:errors="errors.cover_blurb"
            ></error-field>

            <label for="intro">INTRO</label><br/>
            <textarea 
                type="text" 
                v-model="post.intro" 
                id="intro"
                required="required"
                maxlength="300"
                placeholder="1-2 sentences to appear on homepage to capture attention. [hint: 3-300 characters]"
                v-on:blur="validate">
            </textarea><br/>
            <error-field
                v-if="errors && 'intro' in errors"
                v-bind:errors="errors.intro"
            ></error-field>

            <label for="title">TITLE</label><br/>
            <input 
                type="text" 
                v-model="post.title" 
                id="title" 
                required="required"
                minlength="3"
                maxlength="100"
                placeholder="The main title for the blog post. [hint: 3-100 characters]"
                v-on:blur="validate"
            /><br/>
            <error-field
                v-if="errors && 'title' in errors"
                v-bind:errors="errors.title"
            ></error-field>

            <label for="author">AUTHOR</label><br/>
            <input 
                type="text" 
                v-model="post.author" 
                id="author" 
                required="required" 
                minlenth="3"
                maxlength="100"
                placeholder="The name of the blogger [hint: 3-100 characters]."
                v-on:blur="validate"
            /><br/>
            <error-field
                v-if="errors && 'author' in errors"
                v-bind:errors="errors.author"
            ></error-field>

            <label for="published_date">PUBLISH DATE</label><br/>
            <input 
                type="text" 
                v-model="post.published_date" 
                id="published_date" required="required"
                maxlength="10"
                placeholder="the date to appear for the blog [hint: format mm-dd-yyyy]"
                v-on:blur="validate"
            /><br/>
            <error-field
                v-if="errors && 'published_date' in errors"
                v-bind:errors="errors.published_date"
            ></error-field>

            <label for="body">POST BODY</label><br/>
            <textarea 
                type="text" 
                v-model="post.body" 
                id="body"
                required="required"
                minlength="100"
                placeholder="Brief teaser to appear on homepage. [hint: minimum 100 characters]"
                v-on:blur="validate">
            </textarea><br/>
            <error-field
                v-if="errors && 'body' in errors"
                v-bind:errors="errors.body"
            ></error-field>

            <label for="image">IMAGE</label><br/>
            <select v-model="post.image" id="image" name="image" v-on:blur="validate">
                <option value="">Select an Image</option>
                <option value="alps.png">Crossing the Alps 1805</option>
                <option value="brumaire.png">Coup of 18 Brumaire by F. Bouchot</option>
                <option value="tuileries.png">Study at the Tuileries 1812</option>
                <option value="legion.png">Legion d'Honneur 1812</option>
                <option value="crossing.png">Crossing the Alps 1850</option>
                <option value="arcole.png">Pont d'Arcole</option>
            </select><br/>
            <error-field
                v-if="errors && 'image' in errors"
                v-bind:errors="errors.image"
            ></error-field>

            <input 
                v-on:change="useTestData" 
                v-model="checkedUseTestData"
                type="checkbox" 
                id="testData"
            /> Use Test Data
            <button v-on:click="addPost()">ADD BLOG POST</button>
        </div>
    </div>
</template>

<script>
import { axios } from "@/common/app.js";
import ErrorField from "@/components/ErrorField.vue";
import Validator from "validatorjs";

export default {
    components: {
        "error-field": ErrorField,
    },
    data() {
        return {
            post: {
                title: "",
                author: "",
                published_date: "",
                cover_blurb: "",
                intro: "",
                body: "",
                image: "",
                archive: 0,
            },
            validationErrors: [],
            checkedUseTestData: false,
            successfulPost: false,
            errors: null,
        };
    },
    computed: {
        imgSrc() {
            try {
                return require("@/assets/images/success.png");
            } catch (e) {
                return require("@/assets/images/404.png");
            }
        },
    },
    methods: {
        useTestData() {
            if (this.checkedUseTestData==true) {
                this.validationErrors = [];
                this.post.title = "Battle of Waterloo"
                this.post.author = "Napoleon Bonaparte"
                this.post.published_date = "06-18-1815"
                this.post.cover_blurb = "The End"
                this.post.intro = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo"
                this.post.body = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                this.post.image = "alps.png"
                this.post.archive = 0
            } else {
                this.post.title = ""
                this.post.author = ""
                this.post.published_date = ""
                this.post.cover_blurb = ""
                this.post.intro = ""
                this.post.body = ""
                this.post.image = ""
                this.post.archive = 0                
            }
        },
        addPost() {
            if (this.validate()) {
                axios.post('/post', this.post).then((response) => {
                    if (response.data.errors) {
                        this.validationErrors.push(response.data.errors);
                        this.successfulPost = false;
                    } else {
                        this.$emit("update-posts");
                        this.successfulPost = true; 
                        this.errors = null;
                        this.post = [];
                        this.validationErrors = [];
                    }
                });
            }
        },
        validate() {
            let validator = new Validator(this.post, {
                cover_blurb: "required|between:3,100",
                intro: "required|between:3,300",
                title: "required|between:3,100",
                author: "required|between:3,100",
                published_date: "required|alpha_dash|min:10|max:10",
                body: "required|min:100",
                image: "required",
            });

            if (validator.fails()) {
                this.errors = validator.errors.all();
            } else {
                this.errors = null;
            }

            return validator.passes();
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
        margin: 8px 0px 0px 425px;
        padding: 18px 20px;
        width: 200px;
    }

    button:focus {
        outline:0;
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
        height: 1250px;
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

    p.validation {
        color: #f6db7a;
        font-family: "Montserrat", sans-serif;
    }

    input[type=text], select, textarea {
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

    input:focus, select:focus, textarea:focus {
        outline:0;
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