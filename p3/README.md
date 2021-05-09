# Project 3

- By: ** Bryon Justice **
- Production URL: <http://e28p3.vueoftheyard.com>

## Outside resources

- Google Fonts - Bebas Neue: [fonts.google.com](https://fonts.google.com/specimen/Bebas+Neue)
- Google Fonts - Montserrat: [fonts.google.com](https://fonts.google.com/specimen/Montserrat)
- Vue.js: [v3.vuejs.org](https://v3.vuejs.org/guide/introduction.html)
- Wikipedia: [https://en.wikipedia.org/wiki/Napoleon](https://en.wikipedia.org/wiki/Napoleon)

### Artwork perpared with Adobe Photoshop. Source All images (Public Domain) from:

- [Wikimedia Commons](/commons.wikimedia.org)
- [Google Arts and Culture](https://artsandculture.google.com/)

## How is authentication being used in your application?

- PostAddPage (add a post page)\
  The primary page to create content by posting a blog requires authorization.
  Authorization is enforced both via Vue Router navigation guards (reference `\common\router.js` and identify the route `path: '/post/new',` which includes the `requiresAuth: true` meta data)  
  and by the available API permission level on the `post` resource. The resource permission level has been set to level 1 permitting the resource readable by all site visitors, but only alterable by registered users.

## What data entities of your application are being managed via Vuex?

- The blogs `posts` data is managed via Vuex (reference `\common\store.js`

## E2E Testing screenshot

![Project P3, A Boneyfide Blog, passing E2E tests](/src/assets/images/passing-tests.png)
