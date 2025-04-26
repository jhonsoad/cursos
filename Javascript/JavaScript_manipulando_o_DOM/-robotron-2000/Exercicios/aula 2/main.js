const botao = document.querySelector('#calcular');
const resultado = document.querySelector('.resultado');

botao.addEventListener('click', () => {
    resultado.innerText = 'Fui clicado';
})