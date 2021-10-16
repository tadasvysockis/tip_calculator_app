/// <reference types="Cypress" />
describe("My first test", ()=>{
    beforeEach(()=>{
        cy.visit('http://localhost:3000/');   
    });
    
    it("Random unit test", ()=>{
        expect(true).toBe(true);
    });
    
    it('1 User case', ()=>{
        const billValue = 100;
        const numOfPeople = 1;
        const customTip = 32;
        const buttonValues = ['5','10','15','25','50'];
        //Add bill value and check if total is changed
        cy.get('#Bill').clear().type(billValue).should('have.value', billValue);
        cy.get('#Total').should('include.text', '$'+billValue);
        //Add number of people and check if value is changed
        cy.get('#Number').clear();
        cy.get('#Number').type(numOfPeople).should('have.value', numOfPeople);
        cy.get('#Tip').should('include.text', '$0');
        cy.get('#Total').should('include.text', '$'+(billValue/numOfPeople).toFixed(2));
        //check all default buttons and if values are changing
        buttonValues.forEach((value)=>{
            cy.contains(value).click();
            let tipValue = (billValue * (parseInt(value)/100))/numOfPeople;
            let totalValue = billValue/numOfPeople + tipValue;
            cy.get('#Tip').should('include.text', '$'+tipValue.toFixed(2));
            cy.get('#Total').should('include.text', '$'+totalValue.toFixed(2));
        });
        //Custom case
        cy.get("#Custom").type(customTip).should('have.value', customTip);      
        cy.get('#Tip').should('include.text', ((billValue * (parseInt(customTip)/100))/numOfPeople).toFixed(2));
        cy.get('#Total').should('include.text', (billValue/numOfPeople + (billValue * (parseInt(customTip)/100))/numOfPeople).toFixed(2));

        //Reset 
        cy.get("#Reset").click();
        cy.get('#Tip').should('include.text', '$0');
        cy.get('#Total').should('include.text', '$0');
        cy.get('#Bill').should('have.value', '0');
        cy.get("#Custom").should('have.value', '');
        cy.get('#Number').should('have.value', '1');

        /*cy.visit('https://example.cypress.io');

        cy.contains('type').click();
        
        cy.url().should('include','/commands/actions');
        
        cy.get('.action-email')
            .type('fake@email.com')
            .should('have.value', 'fake@email.com')
        // Arrange - setup initiail app state
        // - visit a web page
        // - query for an element
        // Act - take an action
        // - intecat with that element
        // Assert - make an assertion
        // - make an assertion about page content*/

    });
    it('5 User case', ()=>{
        const billValue = 350;
        const numOfPeople = 5;
        const customTip = 32;
        const buttonValues = ['5','10','15','25','50'];
        //Add bill value and check if total is changed
        cy.get('#Bill').clear().type(billValue).should('have.value', billValue);
        cy.get('#Total').should('include.text', '$'+billValue);
        //Add number of people and check if value is changed
        cy.get('#Number').clear();
        cy.get('#Number').type(numOfPeople).should('have.value', numOfPeople);
        cy.get('#Tip').should('include.text', '$0');
        cy.get('#Total').should('include.text', '$'+(billValue/numOfPeople).toFixed(2));
        //check all default buttons and if values are changing
        buttonValues.forEach((value)=>{
            cy.contains(value).click();
            let tipValue = (billValue * (parseInt(value)/100))/numOfPeople;
            let totalValue = billValue/numOfPeople + tipValue;
            cy.get('#Tip').should('include.text', '$'+tipValue.toFixed(2));
            cy.get('#Total').should('include.text', '$'+totalValue.toFixed(2));
        });
        //Custom case
        cy.get("#Custom").type(customTip).should('have.value', customTip);      
        cy.get('#Tip').should('include.text', ((billValue * (parseInt(customTip)/100))/numOfPeople).toFixed(2));
        cy.get('#Total').should('include.text', (billValue/numOfPeople + (billValue * (parseInt(customTip)/100))/numOfPeople).toFixed(2));

        //Reset 
        cy.get("#Reset").click();
        cy.get('#Tip').should('include.text', '$0');
        cy.get('#Total').should('include.text', '$0');
        cy.get('#Bill').should('have.value', '0');
        cy.get("#Custom").should('have.value', '');
        cy.get('#Number').should('have.value', '1');
    });

    it('Edge cases',()=>{
        //entered 0 as number of people
        cy.get('#Number').clear();
        cy.get('#Number').type(0).should('have.value', 0);
        cy.get('#NumberError').should('include.text',"Can't be zero");
        //try enter text as value
        cy.get('#Number').clear();
        cy.get('#Number').type('abcdefghjklm').should('have.value', 0);
    });

    it('Mobile View',()=>{
        cy.viewport(375, 660);
        const billValue = 378.22;
        const numOfPeople = 7;
        const customTip = 32;
        const buttonValues = ['5','10','15','25','50'];
        //Add bill value and check if total is changed
        cy.get('#Bill').clear().type(billValue).should('have.value', billValue);
        cy.get('#Total').should('include.text', '$'+billValue);
        //Add number of people and check if value is changed
        cy.get('#Number').clear();
        cy.get('#Number').type(numOfPeople).should('have.value', numOfPeople);
        cy.get('#Tip').should('include.text', '$0');
        cy.get('#Total').should('include.text', '$'+(billValue/numOfPeople).toFixed(2));
        //check all default buttons and if values are changing
        buttonValues.forEach((value)=>{
            cy.contains(value).click();
            let tipValue = (billValue * (parseInt(value)/100))/numOfPeople;
            let totalValue = billValue/numOfPeople + tipValue;
            cy.get('#Tip').should('include.text', '$'+tipValue.toFixed(2));
            cy.get('#Total').should('include.text', '$'+totalValue.toFixed(2));
        });
        //Custom case
        cy.get("#Custom").type(customTip).should('have.value', customTip);      
        cy.get('#Tip').should('include.text', ((billValue * (parseInt(customTip)/100))/numOfPeople).toFixed(2));
        cy.get('#Total').should('include.text', (billValue/numOfPeople + (billValue * (parseInt(customTip)/100))/numOfPeople).toFixed(2));

        //Reset 
        cy.get("#Reset").click();
        cy.get('#Tip').should('include.text', '$0');
        cy.get('#Total').should('include.text', '$0');
        cy.get('#Bill').should('have.value', '0');
        cy.get("#Custom").should('have.value', '');
        cy.get('#Number').should('have.value', '1');
    });
})