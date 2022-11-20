describe('HomeView', () => {
  it('lists animals in order', () => {
    cy.visit('/')
    cy.get('[data-cy=card-animal]').first().should('contain', 'abalone')
    cy.contains('Sort Z-A')
  })

  it('sorts in descending order', () => {
    cy.visit('/')
    cy.contains('Sort Z-A').click()
    cy.get('[data-cy=card-animal]')
      .first()
      .should('contain', 'zebra turkeyfish')
  })

  it('filters animals by type', () => {
    cy.visit('/')
    cy.get('[data-cy=card-animal]').first().should('contain', 'abalone')
    cy.get('[data-cy=card-animal]').first().should('contain', 'Sea creature')
    cy.get('[data-cy=search-form-types]').uncheck(['sea', 'bugs'])
    cy.get('[data-cy=card-animal]').first().should('contain', 'anchovy')
    cy.get('[data-cy=card-animal]').first().should('contain', 'Fish')
  })

  it('searches specific animal', () => {
    cy.visit('/')
    cy.get('[data-cy=search-form-term]').type('acorn')
    cy.get('[data-cy=card-animal]').first().should('contain', 'acorn')
  })

  it('click on the first animal and view details', () => {
    cy.visit('/')
    cy.get('[data-cy=card-animal]').first().should('contain', 'abalone')
    cy.get('[data-cy=card-animal]').first().click()
    cy.url().should('include', '/sea/')
    cy.get('h1').contains('abalone')
    cy.contains('Availability')
  })
})
