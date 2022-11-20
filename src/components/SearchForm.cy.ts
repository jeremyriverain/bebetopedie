import SearchForm from '@/components/SearchForm.vue'
import { useStore, initialState, type MainStoreState } from '@/store'

const toggleBtnSelector = '[data-cy=search-form-toggle-button]'

describe('SearchForm [desktop]', () => {
  const store = useStore()
  beforeEach(() => {
    store.$patch(initialState() as MainStoreState)
    cy.viewport(1024, 768)
  })
  it('hides toogle button and displays the form', () => {
    cy.mount(SearchForm)
    cy.get(toggleBtnSelector).should('not.exist')
    cy.get('form').should('be.visible')
  })
  it('animalTypesSelected from the store is correctly updated', () => {
    cy.mount(SearchForm)
    cy.wrap(store).its('animalTypesSelected').should('have.length', 3)
    cy.get('[data-cy=search-form-types]').each((checkbox) => {
      cy.wrap(checkbox).should('be.checked')
    })
    cy.get('[data-cy=search-form-types]').first().uncheck()
    cy.wrap(store).its('animalTypesSelected').should('have.length', 2)
  })

  it('searchTerm from the store is correctly updated', () => {
    cy.mount(SearchForm)
    cy.wrap(store).its('searchTerm').should('have.length', 0)
    cy.get('[data-cy=search-form-term]').type('abalone')
    cy.wrap(store).its('searchTerm').should('eq', 'abalone')
  })

  it('ascendingOrder from the store is correctly updated', () => {
    cy.mount(SearchForm)
    cy.wrap(store).its('ascendingOrder').should('be.true')
    cy.contains('Sort Z-A').click()
    cy.wrap(store).its('ascendingOrder').should('be.false')
    cy.contains('Sort A-Z')
  })

  it('onlyAvailableAnimals from the store is correctly updated', () => {
    cy.mount(SearchForm)
    cy.wrap(store).its('onlyAvailableAnimals').should('be.false')
    cy.contains('Only show available animals').click()
    cy.wrap(store).its('onlyAvailableAnimals').should('be.true')
  })
})

describe('SearchForm [mobile]', () => {
  it('hides form initially and shows it if I click on the button', () => {
    cy.mount(SearchForm)
    cy.get('form').should('not.be.visible')
    cy.get(toggleBtnSelector).contains('Open filters').click()
    cy.get('form').should('be.visible')
    cy.get(toggleBtnSelector).contains('Close filters')
  })
})
