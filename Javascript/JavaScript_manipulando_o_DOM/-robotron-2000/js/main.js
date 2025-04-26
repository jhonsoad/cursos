
const controle = document.querySelectorAll('[data-controle]');
const estatisticas = document.querySelectorAll('[data-estatistica]')
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controle.forEach((elemento) => {
    elemento.addEventListener('click', (evento) => {
        const operacao = evento.target.dataset.controle;
        const controle = evento.target.parentNode;
        manipulaDados(operacao, controle);
        atualizaEstatisticas(evento.target.dataset.peca);
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

function atualizaEstatisticas(peca) {
    estatisticas.forEach((elemento) => {
        elemento.textContent = parseInt(elemento.textContent) + parseInt(pecas[peca][elemento.dataset.estatistica])
    })
}

//Cor do robo
const robotronCores = [
    'img/Robotron - Amarelo/Robotron 2000 - Amarelo.png',
    'img/Robotron - Azul/Robotron 2000 - Azul.png',
    'img/Robotron - Branco/Robotron 2000 - Branco.png',
    'img/Robotron - Preto/Robotron 2000 - Preto.png',
    'img/Robotron - Rosa/Robotron 2000 - Rosa.png',
    'img/Robotron - Vermelho/Robotron 2000 - Vermelho.png'
]
const cores = [
    'Amarelo',
    'Azul',
    'Branco',
    'Preto',
    'Rosa',
    'Vermelho'
]

let currentIndex = '0';
const robotron = document.querySelector("#robotron")
const div = document.querySelector('[data-cores]')
const input = document.querySelector('[data-input]')
const botaoProximo = document.querySelector('[data-cor=">"]')
const botaoAnterior = document.querySelector('[data-cor="<"]')

function mostraImagem() {
    robotron.src = robotronCores[currentIndex]
    div.dataset.cores = cores[currentIndex];
    console.log(div.dataset.cores)
    input.value = cores[currentIndex];
}

mostraImagem(currentIndex);

botaoAnterior.addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = robotronCores.length - 1;
    }
    mostraImagem(currentIndex);
})

botaoProximo.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex > robotronCores.length - 1) {
        currentIndex = 0;
    }
    mostraImagem(currentIndex);
})