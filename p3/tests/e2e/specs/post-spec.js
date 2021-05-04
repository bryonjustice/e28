describe('P3 Post Add', () => {
    const test = {
        homePath: '/',
        accountPath: '/account',
        postNewPath: '/post/new',
        locateEmail: '#loginForm > input[type=text]:nth-child(4)',
        email: 'jill@harvard.edu',
        locatePassword: '#loginForm > input[type=password]:nth-child(8)',
        password: 'asdfasdf',
        locateCoverBlurb: '#cover_blurb',
        locateIntro: '#intro',
        locateTitle: '#title',
        locateAuthor: '#author',
        locatePublishDate: '#published_date',
        locatePostBody: '#body',
        locateImage: '#image',
        locateConfirm: 'div.intro'
    }

    it('logs in and enters a new blog post', () => {
        cy.visit(test.accountPath)
        cy.get(test.locateEmail).clear().type(test.email)
        cy.get(test.locatePassword).clear().type(test.password)
        cy.get('button').click()
        cy.contains(test.locateBlurb, 'Bienvenue à La Fête, Jill Harvard!')
        cy.visit(test.postNewPath)
        cy.get(test.locateCoverBlurb).clear().type('Blurb Cypress Pass')
        cy.get(test.locateIntro).clear().type('Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo')
        cy.get(test.locateTitle).clear().type('Title Cypress Pass')
        cy.get(test.locateAuthor).clear().type('Cypress Automation')
        cy.get(test.locatePublishDate).clear().type('08-15-1769')
        cy.get(test.locatePostBody).clear().type('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.')
        cy.get(test.locateImage).select('Crossing the Alps 1805');
        cy.get('button').click()
        cy.get('div.intro', 'You have successfully added your post.')
        cy.visit(test.homePath)
        cy.contains(test.locateBlurb, 'Blurb Cypress Pass')
    })

    it('visits account page and logs out', () => {
        cy.visit(test.accountPath)
        cy.get('button').click()
        cy.get('h2', 'Login')
    })
})
  