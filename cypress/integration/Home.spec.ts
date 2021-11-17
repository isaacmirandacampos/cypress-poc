/// <reference types="cypress" />
import screens from '../screens'
context('Home', () => {
  screens.forEach(view => {
    beforeEach(() => {
      cy.viewport(view.width, view.height)
      cy.visit('http://localhost:3000')
    })
    it(`${view.width}x${view.height} | Um formulário de login | end-to-end`, () => {
      cy.get('#email').type('fulano_do_mit@domain.com')
      cy.get('#password').type('senha-muito-forte')
      cy.contains('Logar').click()
  
      cy.get('span').contains('email: fulano_do_mit@domain.com')
      cy.get('span').contains('password: senha-muito-forte')
    })
  
    it(`${view.width}x${view.height} | Listagem de nomes requisitados de uma api publica | teste de integração`, () => {
      cy.intercept('https://jsonplaceholder.cypress.io/users', {
        statusCode: 200,
        body: [
          { name: 'Fulano' },
          { name: 'Fulano do MIT' },
          { name: 'Fulano da filadelfia' },
        ],
      })
      cy.get('li').contains('Fulano do MIT')
    })
  
    it(`${view.width}x${view.height} | Adiciona um número para cada clique`, () => {
      cy.contains('ADD').click()
      cy.contains('ADD').click()
      cy.contains('ADD').click()
  
      cy.get('.count-title')
        .should('contain', 'Contador: 3')
    })
  })
})
