describe("Insight E2E tests", () => {

    /*after(()=>{
        Cypress.Cookies.defaults({
            preserve: []
        });
    });*/
    beforeEach(() => {
        Cypress.Cookies.defaults({
            preserve: ['ASP.NET_SessionId', 'WSS_KeepSessionAuthenticated','EdgeAccessCookie','WSS_FullScreenMode']
        });
    });
    it("Successfully loged in", ()=>{
        cy.url().should('include', 'https://insight-test.scope-international.com');
    });

    it('Navigate to the workspace with quick link',()=>{
        cy.get('#ctl00_ctl43_CtmsQuickNav').click().then(() => {
            cy.wait(3000);
            cy.get('iframe').then((iframe) => {
                const body = iframe.contents().find('body');
                cy.wrap(body).find('#QuickNavigation_SmallSearchInputBox').type('HELP-110').should('have.value', "HELP-110");
                cy.wrap(body).contains('Pharma').parent().find('span').first().click();
                cy.wrap(body).contains('HELP-110').dblclick();
                //cy.clear();
            });
        });
    });

    it('Navigate directly to the place',()=>{
        cy.visit('https://insight-test.scope-international.com/sites/pharma/HELP-110/default.aspx'); 
        cy.url().should('include', '/pharma/HELP-110') ;
    });

    it('Open the All items view of the Study Team Member list',()=>{
        cy.contains('Set up').click().then(()=>{
            cy.contains('Team').click().then(()=>{
                cy.url().should('include', '/StudyTeamMembers/AllItems.aspx');
            });

        });
        
    });
    it('Open the New Item form of the Study Team Member list',()=>{
        cy.wait(3000);
        cy.contains('new item').click().then(()=>{
            cy.url().should('include', '/NewForm.aspx');
        });    
    });
    it('Click save and error messages appears',()=>{
        cy.wait(3000);
        cy.contains('Save').click().then(()=>{
            cy.get('.ms-status-title').should('include.text','This form contains 2 error(s), see details below.');
        });    
    });
});