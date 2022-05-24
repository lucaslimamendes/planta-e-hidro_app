cy.fixture('test.json').as('test')

    const userObj = this.userData

    //looping our .json data with a new variable users
    cy.get(userData).each((users) => 
    {
        //Teste de login, insere o valor nos componentes pelo ID
        cy.get('#email').type(users.email)
        cy.get('#pass').type(users.password)
    }); 