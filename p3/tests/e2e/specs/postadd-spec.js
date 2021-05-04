describe('P3 Post Add', () => {
    const test = {
        homePath: '/',
        accountPath: '/account',
        postNewPath: '/post/new',
        locateEmail: '#email',
        email: 'jill@harvard.edu',
        locatePassword: '#password',
        password: 'asdfasdf',
        locateAddNewPostMenu: '#main-menu > nav > ul > li > a:nth-child(2)',
        locateCoverBlurb: '#cover_blurb',
        locateIntro: '#intro',
        locateTitle: '#title',
        locateAuthor: '#author',
        locatePublishDate: '#published_date',
        locatePostBody: '#body',
        locateImage: '#image',
        cleanupData: 'http://e28api.vueoftheyard.loc/refresh'
    }

    it('verifies validation when no fields are entered', () => {
        cy.visit(test.accountPath)
        cy.get(test.locateEmail, { timeout: 10000 }).should('be.visible')
        cy.get(test.locateEmail).clear().type(test.email)
        cy.get(test.locatePassword).clear().type(test.password)
        cy.get('button').click()
        cy.contains(test.locateBlurb, 'Bienvenue à La Fête, Jill Harvard!')
        cy.wait(5000)
        cy.visit(test.postNewPath)
        cy.get('button', { timeout: 10000 }).should('be.visible')
        cy.get('button').click()
        cy.get('.validation', { timeout: 10000 }).should('be.visible')
        cy.wait(5000)
    })

    it('correctly enters a new blog post', () => {
        cy.visit(test.accountPath)
        cy.get(test.locateEmail, { timeout: 10000 }).should('be.visible')
        cy.get(test.locateEmail).clear().type(test.email)
        cy.get(test.locatePassword).clear().type(test.password)
        cy.get('button').click()
        cy.contains(test.locateBlurb, 'Bienvenue à La Fête, Jill Harvard!')
        cy.wait(5000)
        cy.visit(test.postNewPath)
        cy.get(test.locateCoverBlurb).clear().type('Blurb Cypress Pass')
        cy.get(test.locateIntro).clear().type('Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo')
        cy.get(test.locateTitle).clear().type('Title Cypress Pass')
        cy.get(test.locateAuthor).clear().type('Cypress Automation')
        cy.get(test.locatePublishDate).clear().type('08-15-1769')
        cy.get(test.locatePostBody).clear().type('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.')
        cy.get(test.locateImage).select('Crossing the Alps 1805');
        cy.get('button').click()
        cy.get('div.intro', { timeout: 10000 }).should('be.visible');
        cy.contains('div.intro', 'You have successfully added your post.')
        cy.wait(10000)
    })

    it('verifies the new post on the home page', () => {
        cy.visit(test.homePath)
        cy.contains(test.locateBlurb, 'Blurb Cypress Pass')
    })

    it('tears down test by using API HTTP Method:GET URL:/refresh', () => {
        cy.request(test.cleanupData)
        // Adding delay to allow time for refresh to complete before other tests continue
        cy.wait(10000)
    })

    it('tears down test after adding a new post by visiting account page and logging out', () => {
        cy.visit(test.accountPath)
        cy.get('button').click()
        cy.contains('h2', 'Login')
        cy.visit(test.accountPath)
    })

})
  