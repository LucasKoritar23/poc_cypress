/// <reference types="Cypress" />

import LoginElements from '../elements/loginElements'
const loginElements = new LoginElements
const url = Cypress.config("baseUrl")

class LoginPage {
    // Acessa o site que será testado
    acessarSite() {
        cy.visit(url)
    }

    // Preenche os campos de usuário a senha
    informarCredenciais(){
        cy.get(loginElements.inputLogin()).type("teste")
        cy.get(loginElements.inputSenha()).type("Qualidade@123453")
        cy.get(loginElements.botaoLogin()).click()
    }

    // Preenche os campos de usuário a senha
    informarCredenciaisIncorretas(){
        cy.get(loginElements.inputLogin()).type("teste.teste123")
        cy.get(loginElements.inputSenha()).type("Qualidade@123")
        cy.get(loginElements.botaoLogin()).click()
    }
      
    // Verifica se o botão de MFA está disponível na tela
    visualizarBotaoMfa() {
        cy.get(loginElements.inputMfa()).should('be.visible')
    }

    // Verifica mensagem de erro
    visualizarMensagemErroLogin(){
        cy.get(loginElements.boxMensagem()).should('be.visible')
    }
}

export default LoginPage;