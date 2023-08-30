
const controle = document.querySelectorAll('[data-controle]');

controle.forEach((elemento) => {
    elemento.addEventListener('click', (evento) => {
        const operacao = evento.target.dataset.controle;
        const controle = evento.target.parentNode;
        manipulaDados(operacao, controle);
    });
})

function manipulaDados(operacao, controle) {
    const peca = controle.querySelector('[data-contador]');
    
        if (operacao == '+') {
            peca.value ++;
        }else {
            peca.value --;
        }
};

