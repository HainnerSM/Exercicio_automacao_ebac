/// <reference types="cypress" />
var faker = require('faker');

context('Selcionar produto', () => {


    beforeEach(() => {

        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
        cy.viewport(1280, 1024)


    });




    it('Deve Selecionar um produto da lista de produtos', () => {

        cy.get('[class="product-block grid"]')
            .first()
            //Seleciona o primeiro produto da minha lista de produtos (garantido que haja sempre um produto na lista)
            //.last()
            //Seleciona o ultimo produto da minha lista 
            //.eq(N)
            //Seleciona o N-éssimo produto da lista de produtos (apenas alterar N por qualquer número)
            .click()



    });

    it('adiciona produto ao carrinho com sucesso', () => {
        let quantidadeItens = 9
        cy.get('[class="product-block grid"]').first().click()
        cy.get('.button-variable-item-XS').click()
        cy.get('.button-variable-item-Blue').click()
        cy.get('.input-text').clear()
        cy.get('.input-text').type(quantidadeItens)
        cy.get('.single_add_to_cart_button').click()
        cy.get('.woocommerce-message').should('contain', quantidadeItens + ' × “Abominable Hoodie” foram adicionados no seu carrinho.')


    });


    it('Remove produtos do meu carrinho', () => {
        let quantidadeItens = 9
        cy.get('[class="product-block grid"]')
            .first()
            .click()
        cy.get('.button-variable-item-XS').click()
        cy.get('.button-variable-item-Blue').click()
        cy.get('.input-text').clear()
        cy.get('.input-text').type(quantidadeItens)
        cy.get('.single_add_to_cart_button').click()
        cy.get('.woocommerce-message > .button').click()
        cy.get('.remove > .fa').click()
        cy.get('.cart-empty').should('contain', 'Seu carrinho está vazio.')
        

    });







});

