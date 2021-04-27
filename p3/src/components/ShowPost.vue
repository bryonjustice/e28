<template>
    <div class="show-post"> 
        <div v-if="reading" class="article">
            <div>
                <img v-bind:src="imgSrc" />
            </div>
            <div>
                <div class="body"> 
                <span class="blurb">{{ post.title }}</span><br/>
                <span class="author">by {{ post.author }}</span><br/>
                {{ post.body }}<br/>
                </div>
            </div>
            <div class="trail">
                <a v-bind:href="aHref" >NEXT</a>
            </div>
        </div>

        <div v-else class="card">
            <img v-bind:src="imgSrc" />
            <div class="blurb"> 
                <span class="blurb">{{ post.cover_blurb }}</span><br/>
                {{ post.published_date }}<br/>
            </div>
            <div class="id">
                {{ (('0'+post.id).slice(-2)) }}<br/>
            </div>
            <div class="intro">
                {{ post.intro }}<br/>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        post: {
            type: Object,
        },
        reading: {
            type: Boolean,
            default: true,
        },
    },
    computed: {
        imgSrc() {
            try {
                return require("@/assets/images/" + this.post.image);
            } catch (e) {
                return require("@/assets/images/404.png");
            }
        },
        aHref() {
            let nextHref = "/post/" + (this.post.id + 1); 
            return nextHref;
        },
    },
}
</script>

<style scoped>
    a {
        text-decoration: none;
    }

    div.card {
        background-color: black;
        height: 650px;
        margin: 0px 20px 50px 20px;
        min-width: 425px;
        box-shadow: 5px 10px 8px 10px #000000;
        width: 425px;
    }

    div.article {
        background-color: black;
        box-shadow: 5px 10px 8px 10px #000000;
        display: flex; 
        height: 490px;
        margin: 0px 20px 50px 20px;
        min-width: 425px;
        text-align: left;
        width: 950px;
    }

    div.body {
        font-size: 9pt;
        line-height: 2.5;
        margin: 40px 0px 0px 40px;
    }

    div.blurb {
        margin-top: -420px;
    }

    div.id {
        color: #bf3627;
        font-family: 'Bebas Neue', cursive;
        font-size: 140pt;
        margin: 200px 10px 0px 0px;
        text-align: right;
    }

    span.author {
        color: orange;
        position: relative;
        top: -25px;
    }

    span.blurb {
        color: white;
        font-family: 'Bebas Neue', cursive;
        font-size: 28pt;
    }

    div.intro {
        font-size: 9pt;
        line-height: 2.5;
        margin: -50px 20px 0px 20px;
    }

    div.trail {
        font-family: 'Bebas Neue', cursive;
        font-size: 14pt;
        margin: 520px 20px 0px 20px;
    }

    div.trail a {
        color: white;
        text-decoration: none;
    }

</style>