var mensagem = document.querySelector (".login__subtitle")
var botao = document.querySelector (".button")

botao.addEventListener('click', function (evento) {
    evento.preventDefault();
    var email = document.querySelector('#loginInputEmail')
    console.log(email.value)
    if (email.value == '' || email.value.length == 0 ) {
        mensagem.textContent = 'digite um e-mail valido'
    return

    } else if ( email.value.indexOf('@') ==-1) {
    mensagem.textContent = 'o e-mail informado é invalido'

        return
} else {
    mensagem.textContent = 'seu e-mail ' + email.value + ' foi cadastrado com sucesso'
}
var senha = document.querySelector("#loginInputPassword")
    if (senha.value == '' && senha.value <= 6) {
        mensagem.textContent = 'senha invalida'
        return

    } else {
    mensagem.textContent = ' cadastrado com com sucesso'
}

})


