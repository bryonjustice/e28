# Project 2

- By: ** Bryon Justice **
- Production URL: <http://e28p2.vueoftheyard.com>

## Pages summary

- Homepage w/ All Posts
- Individual Post
- Add a Post

## SFC summary

/components

- BlogTeam.vue
- MainMenu.vue
- ShowBanner.vue
- ShowError.vue
- ShowPost.vue

/components/pages/

- HomePage.vue
- PostAddPage.vue
- PostPage.vue
- PostsPage.vue

## Server interaction

_List the features in your application that are persisting and retrieving data from the server_

- `App.vue` includes a method `loadPosts`<br/>
  HTTP Method: `GET` URL: `/post`

- `PostAddPage.vue` includes a method `addPost`<br/>
  HTTP Method: `POST` URL: `/post`<br/>

  used as `prop` in PostPage.vue and PostsPage.vue

## Outside resources

- Google Fonts - Bebas Neue: [fonts.google.com](https://fonts.google.com/specimen/Bebas+Neue)
- Google Fonts - Montserrat: [fonts.google.com](https://fonts.google.com/specimen/Montserrat)
- Vue.js: [v3.vuejs.org](https://v3.vuejs.org/guide/introduction.html)
- Wikipedia: [https://en.wikipedia.org/wiki/Napoleon](https://en.wikipedia.org/wiki/Napoleon)

### Artwork perpared with Adobe Photoshop. Source All images (Public Domain) from:

- [Wikimedia Commons](/commons.wikimedia.org)
- [Google Arts and Culture](https://artsandculture.google.com/)

## Notes for instructor

N/A
