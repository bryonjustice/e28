describe('P3 Homepage', () => {
    const test = {
        homePath: '/',
        locatePost: 'div.show-post',
        locateBlurb: 'span.blurb',
        locateId: 'div.id',
        locateIntro: 'div.intro'
    }
  
    it('checks blog blurb displays ', () => {
      cy.visit(test.homePath)
      cy.contains(test.locateBlurb, 'How to get a head in life')
    })

    it('checks blog id displays ', () => {
        cy.visit(test.homePath)
        cy.contains(test.locateIdBlurb, '01')
    })

    it('checks blog intro displays ', () => {
        cy.visit(test.homePath)
        cy.contains(test.locateIntro, 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.')
    })

    it('checks all four seeds display ', () => {
        cy.visit(test.homePath)
        cy.get(test.locatePost).its('length').should('be.gte', 3)
    })

    it('checks About/Blog Team component displays', () => {
        cy.visit(test.homePath)
        cy.get('h3', { timeout: 10000 }).should('be.visible');
        cy.contains('h3', 'ABOUT')
    })
})