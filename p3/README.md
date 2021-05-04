# Project 2

- By: ** Bryon Justice **
- Production URL: <http://e28p3.vueoftheyard.com>

## Pages summary

Domain: http://e28p3.vueoftheyard.com/

for Vue Router set up reference: /src/main.js

- HomePage (blog home page)\
  Introductory landing page includes site navigation, a listing of all active posts with abbreviated teaser details to encourage reader interest and an About section to briefly explain the blog purpose and fictional author.\

  Home page navigation path: `'/'`

- PostPage (individual blog post)\
  Long form read of individual post includes the full length blog and additional Next navigation for simple continued reading. Additionally, the page supports 404 type errors for resources that aren't found.\

  Individual blog post navigation path: `'/post/:id'`

- PostAddPage (add a new blog post)\
  Administrator form to add a new blog entry. The page includes a simple check box to autopopulate test data for simplified testing. The form includes client-side form validation for required fields and error display of both client-side and server-side errors.\
  Add a new blog post navigation path: `'/post/new'`

Code Source:\
`/src/components/pages/`

- `HomePage.vue`
- `PostAddPage.vue`
- `PostPage.vue`

## SFC summary

`/src/components`

- `BlogTeam.vue`\
  Renders About component to introduce the blog.

- `MainMenu.vue`\
  Renders the primary site navigation component at the top of the page.

- `ShowBanner.vue`\
  Renders the blog's banner component that appears at the top of the page.

- `ShowError.vue`
  Renders the user error message component when a post is not found.

- `ShowPost.vue`
  Renders an individual post component. The component includes two modes.
  The card mode offers a post summary for the homepage. The reading mode provides the long form post entry for the individual post page.

`/src/components/pages/`

- `HomePage.vue`\
  See page desciption above.

- `PostAddPage.vue`\
  See page description above.

- `PostPage.vue`\
  See page descriotion above.

- `PostsPage.vue`\
  Renders router link for each blog post mapping `v-for` directive from the list of `post` alias elements in the `posts` source data array.

## Server interaction

API: <http://e28api.vueoftheyard.com>

- `App.vue` includes a method `loadPosts`<br/>
  API HTTP Method: `GET` URL: `/post`

  The `posts` array is passed as a `prop` in PostPage.vue and PostsPage.vue

- `PostAddPage.vue` includes a method `addPost`<br/>
  API HTTP Method: `POST` URL: `/post`<br/>

  Additionally the component emits `updatePosts` upon successfully creating a new post to refresh components up the tree.

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
