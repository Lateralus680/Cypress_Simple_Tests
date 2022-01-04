/// <reference types="Cypress" />

//describe("Mobile phone replenishment", () => {
//context("Replenishment less than the allowed amount", () => {
//    it("Show error: Minimum amount of the replenishment is 1 UAH", () => {});
//});
//});

// it('Search by id', () => {
//     cy.visit('https://www.facebook.com/')
//     cy.get('#email')
// }); 

// it('Search by class', () => {
//     cy.visit('https://docs.cypress.io/api/commands/get')
//     cy.get('.DocSearch.DocSearch-Button')
// }); 

// it('Search by tag', () => {
//     cy.visit('https://docs.cypress.io/api/commands/get')
//     cy.get('nav')
// }); 

// it('Search by tag value', () => {
//     cy.visit('https://www.facebook.com/')
//     cy.get('[name="pass"]')
// }); 

// it('Search by different types', () => {
//     cy.visit('https://docs.cypress.io/api/commands/get')
//     cy.get('img[alt="Cypress Docs Logo"]')
// }); 

// it('Search by contains name', () => {
//     cy.visit('http://next.privat24.ua/')
//     cy.get('*[class^="card"]')
// }); 

it('Using Get with Find and Eq', () => {
    cy.visit('http://next.privat24.ua/deposit/open')
    cy.get('tbody').find('td').find('div').find('button').eq('0')
    });

it.only('Using Get with Find and Eq 2', () => {
    cy.viewport(1800, 700)
    cy.visit('https://docs.cypress.io/api/commands/get#Examples')
    cy.get('main').find('div').find('nav').find('li').find('a').eq('4')
    });