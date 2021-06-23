/*
js é Case Sensitive = letras maiúsculas e minusculas 
por Tag: getElementByIdTagName()
por Id: getElementById()
por Nome: getlementsByName()
por Classe: getElementsByClassName()
por Seletor: querySelector()
*/ 


/*acesso js para o contato */
let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nameOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector('#mapa')

/* estilizando com js */
nome.style.width = '100%'
email.style.width = '100%'

/* validação de campo por meio de evento*/  
function validaNome(){
    let txt = document.querySelector('#txtNome')
    if(nome.value.length < 3){
       txt.innerHTML ='Nome Inválido'
       txt.style.color = 'red'
    } else{
        txt.innerHTML = 'Nome Válido!'
        txt.style.color= 'green'
        nomeOk = true
    }
}

function validaEmail(){
    let txtEmail = document.querySelector('#txtEmail')
    if(email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) {
        txtEmail.innerHTML = 'Email Inválido'
        txtEmail.style.color = "red"
    } else{
        txtEmail.innerHTML = 'Email Válido'
        txtEmail.style.color = "green"
        emailOk = true
    }
}

function validaAssunto(){
    let txtAssunto = document.querySelector('#txtAssunto')

    if (assunto.value.length >= 100){
        txtAssunto.innerHTML = 'Digite no máximo 100 caracteres'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'
    } else {
        txtAssunto.style.display = "none"
        assuntoOk = true
    }
}

function enviar(){
    if (nomeOk ==  true && emailOk == true & assuntoOk ==  true){
        alert ('Conteúdo Enviado.')
    } else {
        alert ('Há campos faltantes, preencha corretamente.')
    }
}

function zoomMap(){
    mapa.style.width = '800px'
    mapa.style.height ='600px'
}

function normalMap(){
    mapa.style.width = '400px'
    mapa.style.height ='250px'
}