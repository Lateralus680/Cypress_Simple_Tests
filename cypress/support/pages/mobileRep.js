export class MobilePhoneRep {
    typePhoneNumber(phoneNumber){
        cy.get('[data-qa-node="phone-number"]')
            .type(phoneNumber)
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