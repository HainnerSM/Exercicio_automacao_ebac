/// <reference types="cypress" />
var faker = require('faker');



context('Funcionalidade de pre-cadastro', () => {

    var faker = require('faker');




    beforeEach(() => {

        cy.visit('minha-conta')
        cy.viewport(1280, 1024)
    });

    it.only('Deve completar o pre-cadastro com suceso usando comandos customizados', () => {
        let nome = faker.name.firstName()
        let emailFaker = faker.internet.email(nome,)
        let sobrenome = faker.name.lastName()
        cy.preCadastro(emailFaker, 'senha!@forte', nome, sobrenome)

        
    });






    it('Pre-cadastro com suceso', () => {
        let nome = faker.name.firstName()
        let nomeEmail = faker.internet.email(nome,)
        let sobrenome = faker.name.lastName()

        cy.get('#reg_email').type(nomeEmail)
        cy.get('#reg_password').type('1!JEWQ(2asa2')
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(nome)
        cy.get('#account_last_name').type(sobrenome)
        cy.get('.woocommerce-Button').click()
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')


    });

    it('Pre cadastro sem senha', () => {
        cy.get('#reg_email').type(faker.internet.email())
        cy.get('#reg_password').invoke('val', '')
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-error > li').should('contain', 'Erro: Digite a senha da conta')


    });

    it('Senha de pre cadastro sem caracter especial', () => {
        cy.get('#reg_email').type(faker.internet.email())
        cy.get('#reg_password').type('testantestan')
        cy.get(':nth-child(4) > .button').click()
        // temos um erro. resultado esperado "sistema mostrar mensagem de que senha deve conter caracter"
        //resultado obtido "sistema validou o pre cadastro com senha sem caracter especial"

    });


    it('Pre cadastro em branco', () => {
        cy.get('#reg_email').invoke('val', '')
        cy.get('#reg_password').invoke('val', '')
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-error > li').should('contain', 'Erro: Informe um endereço de e-mail válido.')


    });


    it('Pre cadastro com email em branco', () => {
        cy.get('#reg_email').invoke('val', '')
        cy.get('#reg_password').type('testantestan')
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-error > li').should('contain', 'Erro: Informe um endereço de e-mail válido.')


    });

    it('Primeiro nome em branco', () => {
        let nome = faker.name.firstName()
        let nomeEmail = faker.internet.email(nome,)
        let sobrenome = faker.name.lastName()

        cy.get('#reg_email').type(nomeEmail)
        cy.get('#reg_password').type('1!JEWQ(2asa2')
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').invoke('val', '')
        cy.get('#account_last_name').invoke('val', '')
        cy.get('.woocommerce-Button').click()
        cy.get('[data-id="account_first_name"]').should('contain', 'Nome é um campo obrigatório.')


    });

    it('Sobrenome em branco', () => {
        let nome = faker.name.firstName()
        let nomeEmail = faker.internet.email(nome,)
        let sobrenome = faker.name.lastName()

        cy.get('#reg_email').type(nomeEmail)
        cy.get('#reg_password').type('1!JEWQ(2asa2')
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').invoke('val', '')
        cy.get('#account_last_name').invoke('val', '')
        cy.get('.woocommerce-Button').click()
        cy.get('[data-id="account_last_name"]').should('contain', 'Sobrenome é um campo obrigatório.')


    });


    it('Display name em branco', () => {
        let nome = faker.name.firstName()
        let nomeEmail = faker.internet.email(nome,)
        let sobrenome = faker.name.lastName()

        cy.get('#reg_email').type(nomeEmail)
        cy.get('#reg_password').type('1!JEWQ(2asa2')
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(nome)
        cy.get('#account_last_name').type(sobrenome)
        cy.get('#account_display_name').clear()
        cy.get('.woocommerce-Button').click()
        cy.get('.woocommerce-error > li').should('contain', 'Nome de exibição é um campo obrigatório.')


    });





});