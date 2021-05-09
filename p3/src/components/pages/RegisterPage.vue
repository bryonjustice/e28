<template>
    <div class="register-user">
    <img src="@/assets/images/register.png" v-if="!successfulRegistration"/>
        <div v-if="successfulRegistration">
            <div class="card">
                <img v-bind:src="imgSrc" />
                <div class="blurb"> 
                    <span class="blurb">Voila!</span><br/>
                </div>
                <div class="id">
                    +<br/>
                </div>
                <div class="intro">
                    You have successfully registered and logged in.<br/> 
                    <a href="/">RETURN HOME TO GET STARTED</a>
                </div>
            </div>
        </div>

        <div v-else class="form">
            <label for="name">NAME</label><br/>
            <input 
                type="text" 
                v-model="user.name" 
                id="name" 
                required="required"
                placeholder="Enter your first and last name"
                v-on:blur="validate"
            /><br/>
            <error-field
                v-if="errors && 'name' in errors"
                v-bind:errors="errors.name"
            ></error-field>

            <label for="intro">EMAIL</label><br/>
            <input 
                type="email" 
                v-model="user.email" 
                id="email"
                required="required"
                placeholder="Enter your email. [example: your.user@mail.com]"
                v-on:blur="validate"
            /><br/>
            <error-field
                v-if="errors && 'email' in errors"
                v-bind:errors="errors.email"
            ></error-field>

            <label for="password">PASSWORD</label><br/>
            <input 
                type="password" 
                v-model="user.password" 
                id="password" 
                required="required"
                placeholder="Enter a password that is eight (8) characters long."
                v-on:blur="validate"
            /><br/>
            <error-field
                v-if="errors && 'password' in errors"
                v-bind:errors="errors.password"
            ></error-field>

            <button v-on:click="registerUser()">REGISTER</button>
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
            user: {
                name: "",
                email: "",
                password: "",
            },
            successfulRegistration: false,
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
        registerUser() {
            if (this.validate()){
                axios.post('/register', this.user).then((response) => {
                    if (response.data.errors) {
                        this.errors = response.data.errors;
                        this.successfulRegistration = false;
                    } else {
                        this.successfulRegistration = true; 
                        this.errors = null;
                        this.user = [];
                    }
                });
            }
        },
        validate() {
            let validator = new Validator(this.user, {
                name: "required",
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

    div.register-user {
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

    input[type=text], [type=email], [type=password] {
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