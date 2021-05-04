describe('P3 Individual Post page', () => {
    const test = {
        postPath: '/post/1',
        locatePost: 'div.show-post',
        locateBlurb: 'span.blurb',
        locateAuthor: 'span.author',
        locateNext: '#post-page > div > div > div > div.trail > a',
    }
  
    it('checks blog blurb displays ', () => {
      cy.visit(test.postPath)
      cy.get(test.locateBlurb, { timeout: 10000 }).should('be.visible');
      cy.contains(test.locateBlurb, 'Louis XVI | Guillotined')
    })

    it('checks blog author displays ', () => {
        cy.visit(test.postPath)
        cy.get(test.locateAuthor, { timeout: 10000 }).should('be.visible');
        cy.contains(test.locateAuthor, 'Napoleon Bonaparte')
    })

    it('checks blog id displays ', () => {
        cy.visit(test.postPath)
        cy.get(test.locateNext, { timeout: 10000 }).should('be.visible');
    })
})