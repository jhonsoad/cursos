const subtrair = document.querySelector('#subtrair');
const somar = document.querySelector('#somar');
const braco = document.querySelector('#braco');

const controleAjuste = document.querySelectorAll('.controle-ajuste');
const controleContador = document.querySelectorAll('.controle-contador');

controleAjuste.forEach((elemento) => {
    elemento.addEventListener('click', (evento) => {
        const operacao = evento.target.textContent;
        manipulaDados(operacao);
    });
})

function manipulaDados(operacao) {
    controleContador.forEach((elemento) => {
        if (operacao == '+') {
            elemento.value ++;
        }else {
            elemento.value --;
        }
    })
};

