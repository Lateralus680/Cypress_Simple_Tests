/// <reference types="Cypress" />

import { mobileRep } from "../support/pages/mobileRep"
import { transfers } from "../support/pages/transfers";

it('Mobile phone number replenishment', () => {
    cy.visit('https://next.privat24.ua/mobile?lang=en')
    mobileRep.typePhoneNumber('678456738');
    mobileRep.typeAmount('1');
    mobileRep.typeDebitCardData('4552331448138217', '0524', '123');
    cy.wait(2000);
    mobileRep.typeDebitCardName('YULYA', 'IGNATSIUK');
    cy.wait(3000);
    mobileRep.submitPayment();
    mobileRep.checkDebitCard('4552 **** **** 8217');
    mobileRep.checkAmount('1');
    mobileRep.checkAmount('UAH');
    mobileRep.checkCommission('2');
    mobileRep.checkCommissionCurrency('UAH')
});

it.only('Money transfer between forein cards', () => {
    cy.visit('https://next.privat24.ua/money-transfer/card?lang=en')
    transfers.typeDebitCardData('4552331448138217', '0524', '123');
    transfers.typeDebitCardName('YULYA', 'IGNATSIUK');
    transfers.typeRecieverCardNumber('5309233034765085');
    cy.wait(2000);
    transfers.typeRecieverCardName('ILIA', 'GENDIK')
    transfers.typeAmount('300');
    transfers.typeComment('Cypress test');
    cy.wait(3000);
    transfers.submitTransfer();
    cy.wait(2000);
    transfers.checkPayerCardNumber('4552 3314 4813 8217');
    transfers.checkRecieverCardNumber('5309 2330 3476 5085');
    transfers.checkPayerAmount('300 UAH');
    transfers.checkPayerCommission('87.49 UAH');
    transfers.checkRecieverAmount('300 UAH');
    transfers.checkRecieverCommission('0 UAH');
    transfers.checkTotalAmount('Total to debit', '387.49', 'UAH');
    transfers.checkComment('Cypress test')
});
