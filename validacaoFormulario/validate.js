//Seu JavaScript de validação aqui

var selectEnviarButton = document.querySelector(".formcontato__botao")

//Selecionando inputs
var selectInputeNome = document.getElementById("nome")
var selectInputEmail = document.getElementById("email")
var selectInputAssunto = document.getElementById("assunto")
var selectInputMensagem = document.getElementById("mensagem")

//selecionando DIV da mensagem de erro
var selecionandoDivParaErroNome = document.querySelector(".divParaErroNome")
var selecionandoDivParaErroEmail = document.querySelector(".divParaErroEmail")
var selecionandoDivParaAssunto = document.querySelector(".divParaErroAssunto")
var selecionandoDivParaErroMensagem = document.querySelector(".divParaErroMensagem")

// regex e teste, onde é testado se o campo email está preenchido de forma correta.
const regexpEmail = /\S+@\S+\.\S+/;
const testeRegexEmail = regexpEmail.test(selectInputEmail.value)


selectInputeNome.addEventListener("blur", (evento) => {
    //se o campo nome estiver vazio, é para adicionar mensagem de erro
    if(selectInputeNome.value == ""){
        var conteudo = `<span class="erro">Digite seu nome</span>
    `
    selecionandoDivParaErroNome.innerHTML = conteudo
    return selecionandoDivParaErroNome

    //se o campo nome não estiver vazio, é para retirar mensagem de erro
    }else if(!selectInputeNome.value == ""){
        var selecioandoMensagemErro = document.querySelector(".erro")
        selecioandoMensagemErro.remove()
    }
})


selectInputEmail.addEventListener("blur", (evento) => {
    //se o campo email não passar no teste do Regex, é para adicionar mensagem de erro
    if(selectInputEmail.value == "" || !testeRegexEmail){
        var conteudo = `<span class="erro">Digite um email válido</span>
    `
    selecionandoDivParaErroEmail.innerHTML = conteudo
    return selecionandoDivParaErroEmail
    //se o campo email  passar no teste do Regex, é para retirar mensagem de erro
    }else if(!selectInputEmail.value == "" || testeRegexEmail){
        console.log("com string digitado")
        var selecioandoMensagemErro = document.querySelector(".erro")
        selecioandoMensagemErro.remove()
        
    }
})

selectInputAssunto.addEventListener("blur", (evento) => {
    //Se o campo assunto estiver vazio, adiciona mensagem de erro
    if(selectInputAssunto.value == ""){
        var conteudo = `<span class="erro">Digite o assunto da mensagem</span>
    `
    selecionandoDivParaAssunto.innerHTML = conteudo
    return selecionandoDivParaAssunto
    //Se o campo assunto não estiver vazio, retira a mensagem de erro
    }else if(!selectInputAssunto.value == ""){
        console.log("com string digitado")
        var selecioandoMensagemErro = document.querySelector(".erro")
        selecioandoMensagemErro.remove()
    }
})

selectInputMensagem.addEventListener("blur", (evento) => {
    //Se o campo mensagem estiver vazio, adiciona mensagem de erro
    if(selectInputMensagem.value == ""){
        var conteudo = `<span class="erro">Digite o assunto da mensagem</span>
    `
    selecionandoDivParaErroMensagem.innerHTML = conteudo
    return selecionandoDivParaErroMensagem
    //Se o campo mensagem não estiver vazio, retira a mensagem de erro
    }else if(!selectInputMensagem.value == ""){
        console.log("com string digitado")
        var selecioandoMensagemErro = document.querySelector(".erro")
        selecioandoMensagemErro.remove()
    }
})

selectEnviarButton.addEventListener("click", (evento)=> {
    evento.preventDefault()
    //Se formulário estiver correto, envie mensagem.
    if(!selectInputMensagem.value == "" || !selectInputAssunto.value == "" || !selectInputEmail.value == "" || testeRegexEmail || !selectInputeNome.value == ""){
        alert("Prezados, esse formulário é apenas para mostra que eu sei como fazer uma validação de formulário via HTML e Javascript. Para entrar em contato, favor acessar o Linkedin. Atenciosamente, Daniel Faria")
        window.location.href = "index.html"
    }
})

