describe('P3 Register', () => {
    const test = {
        registerPath: '/register',
        postNewPath: '/post/new',
        locateName: '#name',
        name: 'Charlie Brown',
        locateEmail: '#email',
        email: 'charlie.brown@peanuts.com',
        locatePassword: '#password',
        password: '$noopy2021',
        cleanupData: 'http://e28api.vueoftheyard.loc/refresh'
    }

    it('visits the registration page and tests validation', () => {
        cy.visit(test.registerPath)
        cy.get('button', { timeout: 10000 }).should('be.visible');
        cy.get('button').click()
        cy.contains("The name field is required.");
    })

    it('visits the registration page and registers', () => {
        cy.get(test.locateName, { timeout: 10000 }).should('be.visible');
        cy.get(test.locateName).clear().type(test.name)
        cy.get(test.locateEmail, { timeout: 10000 }).should('be.visible');
        cy.get(test.locateEmail).clear().type(test.email)
        cy.get(test.locatePassword, { timeout: 10000 }).should('be.visible');
        cy.get(test.locatePassword).clear().type(test.password)
        cy.get('button', { timeout: 10000 }).should('be.visible');
        cy.get('button').click()
        cy.get('div.intro', { timeout: 10000 }).should('be.visible');
        cy.contains('div.intro', 'You have successfully registered and logged in.')
        // Navigate to confirm authorization
        cy.visit(test.postNewPath)
        cy.get('button', { timeout: 10000 }).should('be.visible');
        cy.contains('button', 'ADD BLOG POST')
    })

    it('tears down test by using API HTTP Method:GET URL:/refresh', () => {
        cy.request(test.cleanupData)
        // Adding delay to allow time for refresh to complete before other tests continue
        cy.wait(10000)
    })
})