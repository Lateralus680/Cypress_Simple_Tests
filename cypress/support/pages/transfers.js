export class Transfers {
    typeRecieverCardNumber(recNumberCard){
        cy.get('[data-qa-node="numberreceiver"]')
            .type(recNumberCard)
    }

    typeRecieverCardName(recFirstName, recLastName){
        cy.get('[data-qa-node="firstNamereceiver"]')
            .type(recFirstName)
            .get('[data-qa-node="lastNamereceiver"]')
            .type(recLastName)
    }

    typeComment(comment){
        cy.get('[data-qa-node="toggle-comment"]')
            .click()
            .get('[data-qa-node="comment"]')
            .type(comment)
    }

    submitTransfer(){
        cy.get('button[type="submit"]')
            .click()
    }

    checkPayerCardNumber(payerNumber){
        cy.get('[data-qa-node="payer-card"]')
            .should('have.text', payerNumber)
    }

    checkRecieverCardNumber(recNumber){
        cy.get('[data-qa-node="receiver-card"]')
            .should('have.text', recNumber)
    }

    checkPayerAmount(payerAmount){
        cy.get('[data-qa-node="payer-amount"]')
            .should('have.text', payerAmount)
    }

    checkPayerCommission(payerCommission){
        cy.get('[data-qa-node="payer-currency"]')
            .should('have.text', payerCommission)
    }

    checkRecieverAmount(recAmount){
        cy.get('[data-qa-node="receiver-amount"]')
            .should('have.text', recAmount)
    }

    checkRecieverCommission(recCommission){
        cy.get('[data-qa-node="receiver-currency"]')
            .should('have.text', recCommission)
    }

    checkTotalAmount(totalAmountName, totalAmountData, totalAmountCurrency){
        cy.get('[data-qa-node="total"]')
            .find('span')
            .should('contain.text', totalAmountName)
            .get('[data-qa-node="total"]')
            .find('div')
            .should('contain.text', totalAmountData)
            .get('[data-qa-node="total"]')
            .find('div')
            .should('contain.text', totalAmountCurrency)
    }

    checkComment(commentText){
        cy.get('[data-qa-node="comment"]')
            .should('have.text', commentText)
    }
}

export const transfers = new Transfers()