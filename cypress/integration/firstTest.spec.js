/// <reference types="Cypress" />

it('Should first example', () => {
    cy.visit('https://next.privat24.ua/mobile?lang=en')
    cy.get('[data-qa-node="amount"]')
    .type(100)
    .should('have.value', 100)
    .and('be.visible')
});

it('Expect first example', () => {
    cy.visit('https://next.privat24.ua/mobile?lang=en')
    cy.get('[data-qa-node="amount"]')
    .type(100).then(input => {
        expect(input).to.have.value(100)
    })
});

it('Should second example', () => {
    cy.visit('https://next.privat24.ua/deposit/open?lang=en')
    cy.get('[data-qa-value="UAH"]')
    .should('be.checked')
});

it('Should third example', () => {
    cy.visit('https://next.privat24.ua/deposit/open?lang=en')
    cy.contains('Мої депозити')
    .trigger('mouseover')
    .get('#archiveDeposits')
    .should('be.visible')
});

it('Should forth example', () => {
    cy.visit('https://next.privat24.ua?lang=en')
    cy.contains('Show cards')
    .should('have.attr', 'type')
    .and('match', /button/)
});

it.only('Should fifth example', () => {
    cy.visit('https://next.privat24.ua?lang=en')
    cy.url()
    .should('eq', 'https://next.privat24.ua/?lang=en')
});