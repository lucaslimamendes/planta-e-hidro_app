describe('Test home page', () => {

    it('home page see sidebar', () => {
        cy.visit('');
        cy.get('.SideBar').should('be.visible');
    });

});
