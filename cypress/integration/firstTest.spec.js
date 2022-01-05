/// <reference types="Cypress" />

it('Finding with Contains first example', () => {
    cy.visit('https://next.privat24.ua/mobile?lang=en')
    cy.contains('Sign in')
});

it('Finding with Contains second example', () => {
    cy.visit('https://next.privat24.ua/mobile?lang=en')
    cy.contains('div', 'Sign in')
});

it('Finding with Contains third example', () => {
    cy.visit('https://next.privat24.ua/mobile?lang=en')
    cy.contains('SIGN IN', {matchCase: false})
});

it.only('Finding with Contains and Get', () => {
    cy.visit('https://next.privat24.ua/mobile?lang=en')
    cy.get('footer').contains('Apple store')
});