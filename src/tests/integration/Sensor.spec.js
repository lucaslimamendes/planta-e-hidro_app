describe('Test sensor page', () => {

    it('sensor page see sidebar', () => {
        cy.visit('/sensor');
        cy.get('.SideBar').should('be.visible');
    });

});
