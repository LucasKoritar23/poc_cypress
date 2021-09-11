/* global Given, Then, When */

import LoginPage from '../page/loginObjects'
const loginPage = new LoginPage

Given("que eu tenha acesso a site do Auzituck", () => {
    loginPage.acessarSite();
}) 

When("preencher os dados de login", () => {
    loginPage.informarCredenciais();
})

When("preencher os dados de login incorretamente", () => {
    loginPage.informarCredenciaisIncorretas();
})

Then("deve apresentar a tela para preenchimento do MFA", () => {
    loginPage.visualizarMensagemErroLogin();
})