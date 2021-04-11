<template>
    <div class="show-post">
        {{ post.id }}<br/>
        {{ post.title }}<br/>
        {{ post.author }}<br/>
        {{ post.published_date }}<br/>
        {{ post.cover_blurb }}<br/>
        {{ post.intro }}<br/>
        {{ post.body }}<br/>
        {{ post.image }}<br/>
        {{ post.archive }}<br/>
    </div>
</template>

<script>
export default {
    props: {
        post: {
            type: Object,
        },
    },
}
</script>

<style>

</style>