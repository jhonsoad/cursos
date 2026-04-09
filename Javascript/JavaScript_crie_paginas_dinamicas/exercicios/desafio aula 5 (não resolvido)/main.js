// onkeyup não funciona
const listaDeBotoes = document.querySelectorAll('input[type=button]');

let inputTel = document.querySelector('input[type=tel]');

for (var contador = 0; contador < listaDeBotoes.length; contador ++) {
    
    const botao = listaDeBotoes[contador];
    
    botao.onclick = function() {
        botao.classList.add('ativa');
        inputTel.value = inputTel.value + botao.value;
    }

    botao.onkeydown = function(e){

        if(e.code === 'Space' || e.code === 'Enter'){
            botao.classList.add('ativa');
        }
    };
    
    function remover () {

        botao.onkeyup = function (){
            botao.classList.remove('ativa');
        }
    };
    remover();

}
remover();