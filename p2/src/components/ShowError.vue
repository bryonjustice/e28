<template>
    <div class="show-error"> 
        <div class="article">
            <div>
                <img src="@/assets/images/404.png"/>
            </div>
            <div>
                <div class="body"> 
                <span class="blurb">You have been defeated.</span><br/>
                <span class="author">Our Humble Apologies</span><br/>
                Unfortunately, we can't find the post for the address you entered 
                in your browser. Sadly, you can't win them all.  Even Napoleon had his Waterloo.  
                Please try returning to our home page and trying another interesting read.<br/>
                <br/>
                <a href="/">RETURN HOME</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

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

</style>