// https://docs.cypress.io/api/introduction/api.html

describe('HomeView', () => {
  it('lists animals', () => {
    cy.visit('/')
    cy.get('[data-cy=card-animal]').first().should('contain', 'abalone')
  })
})
