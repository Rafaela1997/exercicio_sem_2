var mensagem = document.querySelector('.mensagem');
var botao = document.querySelector('button');

botao.addEventListener('click', function (evento) {
    evento.preventDefault();
    var email = document.querySelector('#newsInputEmail')
    console.log(email.value)
    if (email.value == '' || email.value.length == 0) {
        mensagem.textContent = 'digite um e-mail valido'
    } else if ( email.value.indexOf('@') ==-1) {
    mensagem.textContent = 'o e-mail informado é invalido'
} else {
    mensagem.textContent = 'seu e-mail ' + email.value + ' foi cadastrado com sucesso'
}
})



