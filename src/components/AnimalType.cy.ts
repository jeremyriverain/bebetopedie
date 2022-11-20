import AnimalType from './AnimalType.vue'

describe('AnimalType', () => {
  it('fish tag is rendered properly', () => {
    cy.mount(AnimalType, { props: { animalType: 'fish' } })
    cy.get('span').should('contain', 'Fish')
    cy.get('span').should('have.length', 1)
    cy.get('span').should('have.class', 'is-fish')
  })

  it('bug tag is rendered properly', () => {
    cy.mount(AnimalType, { props: { animalType: 'bugs' } })
    cy.get('span').should('contain', 'Bug')
    cy.get('span').should('have.length', 1)
    cy.get('span').should('have.class', 'is-bug')
  })

  it('sea creature tag is rendered properly', () => {
    cy.mount(AnimalType, { props: { animalType: 'sea' } })
    cy.get('span').should('contain', 'Sea creature')
    cy.get('span').should('have.length', 1)
    cy.get('span').should('have.class', 'is-sea')
  })

  it('no tag rendered if wrong type', () => {
    cy.mount(AnimalType, { props: { animalType: 'unknown' as any } })
    cy.get('span').should('have.length', 0)
  })
})
