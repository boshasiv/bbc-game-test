// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//

Cypress.Commands.add('startGame', () => {
    cy.contains('span', 'Start Interactive Game').click();
})

Cypress.Commands.add('launchPhilae', () => {
    cy.get('#launch').click();
})

Cypress.Commands.add('setSpeed', (speedValue = '-6') => {
    cy.get('#speed')
        .invoke('attr', 'value', speedValue)
        .trigger('input')
})

Cypress.Commands.add('setHeight', (heightValue = '-6') => {
    cy.get('#height')
        .invoke('attr', 'value', heightValue)
        .trigger('input')
})
