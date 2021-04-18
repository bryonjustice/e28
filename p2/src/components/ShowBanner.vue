<template>
    <div class="show-banner">
        <div>
            <span>A "BONEY"FIDE</span><span>BLOG</span>
        </div>
        <div id="logo">
            <img src="@/assets/images/imperialBee.png">
        </div>
    </div>
</template>

<script>

</script>

<style>
    div.show-banner {
        margin: -50px 0px 0px 330px;
        position:absolute;
        width: 100vw;
    }

    div.show-banner > div > span {
        color: #f6db7a;
        font-family: 'Bebas Neue', cursive;
        font-size: 72px;
        margin: 0px 0px 0px 60px;
    }

    div.show-banner > #logo {
        margin: -105px 0px 0px 380px;
        position: absolute;
    }

    div.show-banner > #logo > img {
        filter: drop-shadow(10px 10px 4px #333333);
        width: 240px;
    }

</style>