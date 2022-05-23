describe('Test sensor page', () => {
    it('sensor page see sidebar', () => {
        cy.visit('/sensor');
        cy.get('.SideBar').should('be.visible');
    });

    it('sensor page go to login if disconnect', () => {
        cy.visit('/sensor');
        cy.contains('Acessar');
        cy.contains('Senha');
        cy.contains('Login');
    });
});
