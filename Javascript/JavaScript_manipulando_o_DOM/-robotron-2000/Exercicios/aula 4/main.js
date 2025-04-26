
const botaoMostra = document.querySelector('[data-botao-mostra]')
const lista = document.querySelector('[data-lista]')

function verificaTintas() {
        const elemento = lista.dataset.lista
        if(elemento === 'esconder'){
            mostraTintas();
        }else {
            naoMostraTintas();
        }
}

function mostraTintas() {
    lista.setAttribute("data-lista", "mostrar")
}

function naoMostraTintas() {
    lista.setAttribute("data-lista", "esconder")
}
