describe('P3 Account', () => {
    const test = {
        homePath: '/',
        accountPath: '/account',
        postNewPath: '/post/new',
        locateEmail: '#loginForm > input[type=text]:nth-child(4)',
        email: 'jill@harvard.edu',
        locatePassword: '#loginForm > input[type=password]:nth-child(8)',
        password: 'asdfasdf',
    }

    it('visits page that requires authorization without first logging in and is denied', () => {
        cy.visit(test.postNewPath)
        cy.contains(test.locateBlurb, 'You have been defeated.')
    })

    it('visits account page and logs in', () => {
        cy.visit(test.accountPath)
        cy.get(test.locateEmail).clear().type(test.email)
        cy.get(test.locatePassword).clear().type(test.password)
        cy.get('button').click()
        cy.contains(test.locateBlurb, 'Bienvenue à La Fête, Jill Harvard!')
    })

    it('revisits page as authorized user and gains access', () => {
        cy.visit(test.postNewPath)
        cy.contains('button', 'ADD BLOG POST')
    })

    it('visits account page and logs out', () => {
        cy.visit(test.accountPath)
        cy.get('button').click()
        cy.get('h2', 'Login')
    })
})
  