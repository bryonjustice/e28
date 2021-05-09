describe('P3 Validation', () => {
    const test = {
        homePath: '/',
        accountPath: '/account',
        registerPath: '/register',
        postNewPath: '/post/new',
        locateEmail: '#email',
        locatePassword: '#password',
        locateTitle: '#title',
        locateAuthor: '#author',
        email: 'jill@harvard.edu',
        password: 'asdfasdf',
    }

    it('visits account page and shows error message when leaving email field empty', () => {
        cy.visit(test.accountPath)
        cy.get(test.locateEmail, { timeout: 10000 }).should('be.visible');
        cy.get(test.locateEmail).clear();
        cy.get(test.locatePassword).click();
        cy.contains("The email field is required.");
    })

    it('visits registration page and shows error message when leaving email field empty', () => {
        cy.visit(test.accountPath)
        cy.get(test.locateEmail, { timeout: 10000 }).should('be.visible');
        cy.get(test.locateEmail).clear();
        cy.get(test.locatePassword).click();
        cy.contains("The email field is required.");
    })

    it('visits add post page and shows error message when leaving title field empty', () => {
        //test setup - Login as an authorized user
        cy.visit(test.accountPath)
        cy.get(test.locateEmail, { timeout: 10000 }).should('be.visible');
        cy.get(test.locateEmail).clear().type(test.email)
        cy.get(test.locatePassword).clear().type(test.password)
        cy.get('button').click()
        cy.contains('button', 'Logout')
        cy.wait(10000)
        // test the validation on the add new post page
        cy.visit(test.postNewPath)
        cy.get(test.locateTitle, { timeout: 10000 }).should('be.visible');
        cy.get(test.locateTitle).clear();
        cy.get(test.locateAuthor).click();
        cy.contains("The title field is required.");
        //test tear down - Log out
        cy.visit(test.accountPath)
        cy.get('button').click()
        cy.contains('h2', 'Login')
        cy.wait(10000)
    })

})
  