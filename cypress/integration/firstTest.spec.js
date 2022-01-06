/// <reference types="Cypress" />

it('Type first example', () => {
    cy.visit('https://next.privat24.ua/mobile?lang=en')
    cy.get('[data-qa-node="phone-number"]')
    .type(768756456)
});

it('Focus first example', () => {
    cy.visit('https://next.privat24.ua/mobile?lang=en')
    cy.get('[data-qa-node="amount"]')
    .focus()
});

it('Clear first example', () => {
    cy.visit('https://next.privat24.ua/mobile?lang=en')
    cy.get('[data-qa-node="amount"]')
    .type(678)
    .wait(2000)
    .clear()
});

it('Submit first example', () => {
    cy.visit('https://next.privat24.ua/mobile?lang=en')
    cy.get('form[method="post"]')
    .submit()
});

it('Click first example', () => {
    cy.visit('https://next.privat24.ua/mobile?lang=en')
    cy.get('[data-qa-value="manual"]')
    .click()
});

it('Check first example', () => {
    cy.visit('https://blsspain-belarus.com/book_appointment.php')
    .get('div[class="marginRight padding-sm"]').contains('click here')
    .click()
    .get('input[value="Family"]')
    .check()
});

it('Check second example', () => {
    cy.viewport('macbook-15')
    cy.visit('https://privatbank.ua/')
    .get('#switch-input')
    .check({force: true})
    .wait(3000)
    .uncheck({force: true})
});

it('Select first example', () => {
    cy.viewport('macbook-15')
    cy.visit('https://blsspain-belarus.com/book_appointment.php')
    .get('div[class="marginRight padding-sm"]').contains('click here')
    .click()
    .get('#centre')
    .select('Minsk')
    .wait(3000)
    .get('#category')
    .select('Normal')
});

it('ScrollIntoView first example', () => {
    cy.visit('https://next.privat24.ua/mobile?lang=en')
    cy.get('[data-qa-node="lang"]')
    .wait(3000)
    .scrollIntoView()
});

it.only('Trigger first example', () => {
    cy.visit('https://next.privat24.ua/mobile?lang=en')
    cy.contains('Services')
    .wait(3000)
    .trigger('mouseover')
});
