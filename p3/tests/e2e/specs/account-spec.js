describe('P3 Account', () => {
    const test = {
        homePath: '/',
        accountPath: '/account',
        postNewPath: '/post/new',
        locateBlurb: 'span.blurb',
        locateEmail: '#email',
        email: 'jill@harvard.edu',
        locatePassword: '#password',
        password: 'asdfasdf',
        locateWelcome: '#id'
    }

    it('visits page that requires authorization without logging in and is denied', () => {
        cy.visit(test.postNewPath)
        cy.get(test.locateBlurb, { timeout: 10000 }).should('be.visible');
        cy.contains(test.locateBlurb, 'Arrêt! (No, No, No)')
    })

    it('visits account page and logs in', () => {
        cy.visit(test.accountPath)
        cy.get(test.locateEmail, { timeout: 10000 }).should('be.visible');
        cy.get(test.locateEmail).clear().type(test.email)
        cy.get(test.locatePassword).clear().type(test.password)
        cy.get('button').click()
        cy.contains('button', 'Logout')
        cy.get('button').click()
        cy.contains('h2', 'Login')
    })

    it('revisits page as authorized user and gains access', () => {
        cy.visit(test.accountPath)
        cy.get(test.locateEmail, { timeout: 10000 }).should('be.visible');
        cy.get(test.locateEmail).clear().type(test.email)
        cy.get(test.locatePassword).clear().type(test.password)
        cy.get('button').click()
        cy.contains(test.locateBlurb, 'Bienvenue à La Fête, Jill Harvard!')
        cy.visit(test.postNewPath)
        cy.contains('button', 'ADD BLOG POST')
    })

})
  