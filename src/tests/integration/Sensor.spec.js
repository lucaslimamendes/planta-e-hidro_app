describe('Test sensor page', () => {
    it('sensor page see sidebar', () => {
        cy.visit('/sensor');
        cy.get('.SideBar').should('be.visible');
    });

    it('home page see cards cta', () => {
        cy.visit('/sensor');
        cy.contains('Temperatura');
        cy.contains('Luminosidade');
        cy.contains('Umidade');
    });
});
