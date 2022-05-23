describe('Test home page', () => {
    it('home page see sidebar', () => {
        cy.visit('');
        cy.get('.SideBar').should('be.visible');
    });

    it('home page go to login if disconnect', () => {
        cy.visit('');
        cy.contains('Acessar');
        cy.contains('Senha');
        cy.contains('Login');
    });
});
