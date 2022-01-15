/// <reference types="cypress" />
var faker = require('faker');
const perfil = require ('../fixtures/perfil.json')

context('Funcionalidade Login', () => {


    beforeEach(() => {
        cy.visit('minha-conta')
        cy.viewport(1280, 1024)
    });

    afterEach(() => {
        cy.screenshot()
    });
    let nomeCadastro = faker.name.firstName()



    it.only('Deve fazer login com sucesso usando Fixture', () => {
        cy.fixture('perfil').then(dados => {
            cy.get('#username').type(dados.usuario)
            cy.get('#password').type(dados.senha, {log: false})
            cy.get('.woocommerce-form > .button').click()
            cy.get('.woocommerce-MyAccount-content > :nth-child(3)').should('contain', 'A partir do painel de controle de sua conta, você pode ver suas compras recentes, gerenciar seus endereços de entrega e faturamento, e editar sua senha e detalhes da conta.')
    


        })
        
    });

    it('Realizar login com sucesso', () => {
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha, {log: false})
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(3)').should('contain', 'A partir do painel de controle de sua conta, você pode ver suas compras recentes, gerenciar seus endereços de entrega e faturamento, e editar sua senha e detalhes da conta.')


    });

    it('Realizar login com email inválido', () => {
        cy.get('#username').type('alunoeebac@teste.com')
        cy.get('#password').type('testeteste.com')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('contain', 'Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.')

    });

    it('Realizar login com senha  inválido', () => {
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('testeteste.com')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('contain', 'Erro: A senha fornecida para o e-mail aluno_ebac@teste.com está incorreta. Perdeu a senha?')
    });

    it('Realizar login com usuário e senha em branco', () => {
        cy.get('#username').type(' ')
        cy.get('#password').type(' ')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('contain', 'Erro: Nome de usuário é obrigatório.')
    });
});