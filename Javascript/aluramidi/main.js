//Pom -------------------------------------------------
function tocaSomPom() {
    document.querySelector('#som_tecla_pom').play();
}

const listadeTeclas = document.querySelectorAll('.tecla');

listadeTeclas[0].onclick = tocaSomPom;

