// https://docs.cypress.io/api/introduction/api.html

describe('Login Page Elements', () => { 
  it('Checks user and password inputs', () => {
    cy.visit('/login')
    cy.get('[data-test="name-input"]').type('test')
    cy.get('[data-test="password-input"]').type('test')
    cy.get('[data-test="login-btn"]').click()
    cy.url().should('match', /home/)
  })
})

