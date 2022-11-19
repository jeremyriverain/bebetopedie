import AnimalAvailability from './AnimalAvailability.vue'
import { createAnimal } from '@/test-utils'

describe('AnimalAvailability', () => {
  it('displays availability correctly for northern hemisphere', () => {
    cy.mount(AnimalAvailability, {
      props: {
        animal: createAnimal({
          availability: {
            'month-array-northern': [1, 2],
            'month-array-southern': [3, 4],
            'time-array': [8, 9, 10],
            time: '8am - 10am',
          },
        }),
      },
    })
    cy.get('input[type=radio]')
      .should('be.checked')
      .and('have.value', 'northern')

    cy.get('table tr')
      .first()
      .get('td')
      .then((td) => {
        cy.wrap(td).first().contains('January')
        cy.wrap(td).first().find('i.fa-check-square')

        cy.wrap(td).eq(1).contains('February')
        cy.wrap(td).eq(1).find('i.fa-check-square')

        cy.wrap(td).eq(2).contains('March')
        cy.wrap(td).eq(2).find('i.fa-close')
      })

    cy.contains('These animals can be caught from 8am to 10am.')
  })

  it('displays availability correctly for southern hemisphere', () => {
    cy.mount(AnimalAvailability, {
      props: {
        animal: createAnimal({
          availability: {
            'month-array-northern': [1, 2],
            'month-array-southern': [3, 4],
            'time-array': [8, 9, 10],
            time: '8am - 10am',
          },
        }),
      },
    })
    cy.get('input[type=radio]').check('southern')

    cy.get('table tr')
      .first()
      .get('td')
      .then((td) => {
        cy.wrap(td).eq(1).contains('February')
        cy.wrap(td).eq(1).find('i.fa-close')

        cy.wrap(td).eq(2).contains('March')
        cy.wrap(td).eq(2).find('i.fa-check-square')

        cy.wrap(td).eq(3).contains('April')
        cy.wrap(td).eq(3).find('i.fa-check-square')
      })
  })
})
