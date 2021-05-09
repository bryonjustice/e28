<template>
    <div id="account-page" class="account-page">
        <img src="@/assets/images/login.png"/>
        <div id="user" v-if="user">
            <div class="card">
                <div class="blurb"> 
                    <span class="blurb">
                        Bienvenue à La Fête, {{ user.name }}!<br/><br/>
                        You have successfully logged in.  
                    </span><br/>
                </div>
                <div class="id">
                    WELCOME<br/>
                </div>
                <div class="intro">
                    “Show me a family of readers, <br/>
                    and I will show you the people who move the world.”<br/>
                    ― Napoleon Bonaparte <br/><br/>
                    <a href="/">RETURN HOME</a>
                </div>
            </div>
            <button v-on:click="logout">Logout</button>
        </div>

        <div v-else id="loginForm" class="form">
            <h2>Login</h2>
            <label>Email:</label><br/>
            <input 
                type="text" 
                id="email" 
                v-model="data.email" 
                v-on:blur="validate"/><br/>
            <error-field
                v-if="errors && 'email' in errors"
                v-bind:errors="errors.email"
            ></error-field>

            <label>Password:</label><br/>
            <input 
                type="password" 
                id="password" 
                v-model="data.password" 
                v-on:blur="validate"/>
            <error-field
                v-if="errors && 'password' in errors"
                v-bind:errors="errors.password"
            ></error-field>

            <button v-on:click="login">Login</button>

            <div class="join">
                INTERESTED IN CONTRIBUTING TO A "BONEY"FIDE BLOG?<br/><br/>
                <a href="/register">[ REGISTER HERE ]</a>
            </div>
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
            data: {
                email: "",
                password: "",
            },
            errors: null,
        };
    },
    computed: {
        user() {
            return this.$store.state.user;
        },
        posts() {
            return this.$store.state.posts;
        },
    },
    methods: {
        login() {
            if (this.validate()){
                axios.post("login", this.data).then((response) => {
                    if (response.data.authenticated) {
                        this.$store.commit("setUser", response.data.user);
                    } else {
                        this.errors = response.data.errors;
                    }
                });
            }
        },
        logout() {
            axios.post("logout").then((response) => {
                if (response.data.success) {
                    this.$store.commit("setUser", null);
                }
            });
        },
        validate() {
            let validator = new Validator(this.data, {
                email: "required|email",
                password: "required|min:8",
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
        margin: 8px 0px 0px 520px;
        padding: 18px 20px;
        width: 200px;
    }

    button:focus {
        outline:0;
    }

    div.account-page {
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
        margin: 400px 20px 0px 220px;
        min-width: 425px;
        padding: 50px 0px 0px 0px;
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
        margin: 0px 0px 0px -50px;
        text-align: right;
    }

    div.intro {
        font-size: 9pt;
        line-height: 2.5;
        margin: -150px 20px 0px 20px;
    }

    div.join {
        font-size: 28pt;
        line-height: 1;
        margin:70px 20px 0px 20px;
    }

    div.join a {
        color: white;
        font-family: 'Bebas Neue', cursive;
        font-size: 18pt;
        text-decoration: none;

    }

    div.join a:hover, a:active {
        text-decoration: underline;   
    }

    #user button {
        background-color: #bf3627;
        cursor: pointer;
        color: white;
        font-family: 'Bebas Neue', cursive;
        font-size: 18pt;
        margin: 0px 0px 600px 520px;
        padding: 18px 20px;
        width: 200px;
    }

    h2 {
        font-size: 28pt;
    }

    p.validation {
        color: #f6db7a;
        font-family: "Montserrat", sans-serif;
    }

    input[type=text], input[type=password] {
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

    input:focus {
        outline:0;
    }

    label{
        font-size: 18pt;
    }

    span.blurb {
        color: white;
        font-family: 'Bebas Neue', cursive;
        font-size: 18pt;
    }
</style>