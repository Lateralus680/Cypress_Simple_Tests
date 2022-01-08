/// <reference types="Cypress" />

it('Mobile phone number replenishment', () => {
    cy.visit('https://next.privat24.ua/mobile?lang=en')
    .get('[data-qa-node="phone-number"]')
    .type('678456738')
    .get('[data-qa-node="amount"]')
    .type('1')
    .get('[data-qa-node="numberdebitSource"]')
    .type('4552331448138217')
    .get('[data-qa-node="expiredebitSource"]')
    .type('0524')
    .get('[data-qa-node="cvvdebitSource"]')
    .type('123')
    .wait(2000)
    .get('[data-qa-node="firstNamedebitSource"]')
    .type('YULYA')
    .get('[data-qa-node="lastNamedebitSource"]')
    .type('IGNATSIUK')
    .wait(3000)
    .get('[data-qa-node="submit"]')
    .click()
    .get('[data-qa-node="card"]')
    .should('have.text', '4552 **** **** 8217')
    .get('[data-qa-node="amount"]')
    .eq('1')
    .should('contain.text', '1')
    .get('[data-qa-node="amount"]')
    .eq('1')
    .should('contain.text', 'UAH')
    .get('[data-qa-node="commission"]')
    .eq('1')
    .should('contain.text', '2')
    .get('[data-qa-node="commission-currency"]')
    .should('contain.text', 'UAH')
});



