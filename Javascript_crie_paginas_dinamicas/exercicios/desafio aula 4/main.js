const listaDeBotoes = document.querySelectorAll('input[type=button]');

const numero = document.querySelector('input[type=tel]')

for (contador = 0; contador < listaDeBotoes.length; contador ++) {
    const botao = listaDeBotoes[contador];

    botao.onclick = function(){
        //Como transformar numero.value em uma variavel
        numero.value = numero.value + botao.value
    }
    

}