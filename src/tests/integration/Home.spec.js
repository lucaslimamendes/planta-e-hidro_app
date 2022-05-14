describe('Test home page', () => {
    it('home page see sidebar', () => {
        cy.visit('');
        cy.get('.SideBar').should('be.visible');
    });

    it('home page see cards cta', () => {
        cy.visit('');
        cy.contains('Noticia');
        cy.contains('Clima');
        cy.contains('Quantidade');
    });
});
