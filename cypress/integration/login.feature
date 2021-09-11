#language: pt

Funcionalidade: Fluxo completo de Login do Auzituck
  Eu como um submissor e possuindo um usuário válido
  Quero utilizar os serviços do Auzituck
  Para executar qualquer funcionalidade do Caradhras via front-end
 
  Cenário: Validar tela de MFA
    Dado que eu tenha acesso a site do Auzituck
    Quando preencher os dados de login
    Então deve apresentar a tela para preenchimento do MFA

  Cenário: Validar se a tela de MFA não é apresentada ao preencher dados incorretos
    Dado que eu tenha acesso a site do Auzituck
    Quando preencher os dados de login incorretamente
    Então não deve apresentar a tela para preenchimento do MFA