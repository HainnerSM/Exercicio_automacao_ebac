/// <reference types="cypress" />

import enderecoPage from "../support/page-object/endereco.page";

describe('Funcionalidade endereços - Faturamento e Entrega', () => {
    
  beforeEach(() => {
      cy.visit('minha-conta')
      cy.fixture('perfil').then(dados =>{
        cy.login(dados.usuario, dados.senha)

      })
      
      cy.viewport(1280, 1024)
  });

  it('Deve realizar cadastro de faturamento com sucesso', () => {
      




  });


});

