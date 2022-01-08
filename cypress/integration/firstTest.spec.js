/// <reference types="Cypress" />

import { basePage } from "../support/pages/basePage";
import { mobileRep } from "../support/pages/mobileRep"
import { transfers } from "../support/pages/transfers";

it('Mobile phone number replenishment', () => {
    basePage.open('https://next.privat24.ua/mobile?lang=en')
    mobileRep.typePhoneNumber('678456738');
    basePage.typeAmount('1');
    basePage.typeDebitCardData('4552331448138217', '0524', '123');
    cy.wait(2000);
    basePage.typeDebitCardName('YULYA', 'IGNATSIUK');
    cy.wait(3000);
    mobileRep.submitPayment();
    mobileRep.checkDebitCard('4552 **** **** 8217');
    mobileRep.checkAmount('1');
    mobileRep.checkAmount('UAH');
    mobileRep.checkCommission('2');
    mobileRep.checkCommissionCurrency('UAH')
});

it('Money transfer between forein cards', () => {
    basePage.open('https://next.privat24.ua/money-transfer/card?lang=en')
    basePage.typeDebitCardData('4552331448138217', '0524', '123');
    basePage.typeDebitCardName('YULYA', 'IGNATSIUK');
    transfers.typeRecieverCardNumber('5309233034765085');
    cy.wait(2000);
    transfers.typeRecieverCardName('ILIA', 'GENDIK')
    basePage.typeAmount('300');
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

it('GET request example', () => {
    cy.request('https://next.privat24.ua')
        .then((response) => {
            console.log(response);
        });
});

it.only('POST request example', () => {

    const requestBody = {
        "action":"info",
        "phone":"+380686979712",
        "amount":50,
        "currency":"UAH",
        "cardCvv":"123",
        "card":"4552331448138217",
        "cardExp":"0524",
        "xref":"3f66cc9eb25a872998e39901cec63629",
        "_":1641668033122
    };

    const headersData = {
        cookie: 
            '_ga=GA1.2.1158378916.1641325398; _gid=GA1.2.59987440.1641325398; pubkey=a6d8011d3850371827c88e3b2c9154e9; fp=40; lfp=1/4/2022, 10:43:29 PM; pa=1641325410012.53660.24507622837432508next.privat24.ua0.8746741302583594+16',
    };

    cy.request({
        method: 'POST',
        url: 'https://next.privat24.ua/api/p24/pub/mobipay',
        body: requestBody,
        headers: headersData,
    }).then((response) => {
        console.log(response.body);
    });
});
