<template>
    <div class="show-error"> 
        <div class="article">
            <div>
                <img src="@/assets/images/denied.png"/>
            </div>
            <div>
                <div class="body"> 
                <span class="blurb">Arrêt! (No, No, No)</span><br/>
                <span class="author">Freeze! Is this a Coup d'État?!?!?</span><br/>
                Unfortunately, you don't have permissions to the resource you requested.<br/>
                We are sure this was a simple mistake. Please feel free to login and try
                your request again or, in lieu of this deadend, may we recommend that 
                you read of Napoleon's own story of the events of 18 Brumaire, Year VIII.
                <br/> <br/>
                Try returning to the home page and enjoying an interesting read.<br/>
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