import CardAnimal from '@/components/CardAnimal.vue'
import { createAnimal } from '@/test-utils'

describe('CardAnimal', () => {
  it('displays details', () => {
    cy.mount(CardAnimal, {
      props: {
        source: createAnimal(),
      },
    })
    cy.get('[data-cy=card-animal-name]').contains('yellow butterfly')
    cy.get('[data-cy=card-animal-description]').contains('lorem ipsum')
    cy.get('[data-cy=animal-type]').contains('Bug')
    cy.get('a')
      .invoke('attr', 'href')
      .then((href) => {
        expect(href).to.eq('/bugs/1')
      })
  })
})
