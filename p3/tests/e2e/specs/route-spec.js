describe('P3 Navigation', () => {
    const test = {
        homePath: '/',
        postPath: '/post/1',
        accountPath: '/account',
        registerPath: '/register',
        deniedPath: '/denied',
        fileNotFoundPath: '/post/1000',
        locateBlurb: 'span.blurb',
        postNewPath: '/post/new',
        locateEmail: '#loginForm > input[type=text]:nth-child(4)',
        email: 'jill@harvard.edu',
        locatePassword: '#loginForm > input[type=password]:nth-child(8)',
        password: 'asdfasdf',
    }
  
    it('visits the homepage', () => {
      cy.visit(test.homePath)
      cy.contains(test.locateBlurb, 'How to get a head in life')
    })

    it('visits a blog post', () => {
        cy.visit(test.postPath)
        cy.contains(test.locateBlurb, 'Louis XVI | Guillotined')
    })

    it('visits account page', () => {
        cy.visit(test.accountPath)
        cy.contains('h2', 'Login')
    })

    it('visits register page', () => {
        cy.visit(test.registerPath)
        cy.contains('button', 'REGISTER')
    })

    it('visits denied page', () => {
        cy.visit(test.deniedPath)
        cy.contains(test.locateBlurb, 'Arrêt! (No, No, No)')
    })

    it('visits 404 page', () => {
        cy.visit(test.fileNotFoundPath)
        cy.contains(test.locateBlurb, 'You have been defeated.')
    })

    it('visits adding a new blog post', () => {
        // requires logging in
        cy.visit(test.accountPath)
        cy.get(test.locateEmail).clear().type(test.email)
        cy.get(test.locatePassword).clear().type(test.password)
        cy.get('button').click()
        cy.contains(test.locateBlurb, 'Bienvenue à La Fête, Jill Harvard!')
        // test the navigation
        cy.visit(test.postNewPath)
        cy.contains('button', 'ADD BLOG POST')
        // test clean up by logging out
        cy.visit(test.accountPath)
        cy.get('button').click()
    })

})
  