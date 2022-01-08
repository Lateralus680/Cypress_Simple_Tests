export class MobilePhoneRep {
    typePhoneNumber(phoneNumber){
        cy.get('[data-qa-node="phone-number"]')
            .type(phoneNumber)
    }

    typeAmount(amount){
        cy.get('[data-qa-node="amount"]')
            .type(amount)
    }

    typeDebitCardData(cardNumber, expDate, cvv){
        cy.get('[data-qa-node="numberdebitSource"]')
            .type(cardNumber)
            .get('[data-qa-node="expiredebitSource"]')
            .type(expDate)
            .get('[data-qa-node="cvvdebitSource"]')
            .type(cvv)
    }

    typeDebitCardName(firstName, lastName){
        cy.get('[data-qa-node="firstNamedebitSource"]')
            .type(firstName)
            .get('[data-qa-node="lastNamedebitSource"]')
            .type(lastName)
    }

    submitPayment(){
        cy.get('[data-qa-node="submit"]')
            .click()
    }

    checkDebitCard(debitCard){
       cy.get('[data-qa-node="card"]')
            .should('have.text', debitCard)
    }

    checkAmount(amountValue){
        cy.get('[data-qa-node="amount"]')
            .eq('1')
            .should('contain.text', amountValue)
    }

    checkCommission(commission){
        cy.get('[data-qa-node="commission"]')
            .eq('1')
            .should('contain.text', commission)
    }

    checkCommissionCurrency(comCurrency){
        cy.get('[data-qa-node="commission-currency"]')
            .should('contain.text', comCurrency)
    }
};

export const mobileRep = new MobilePhoneRep()