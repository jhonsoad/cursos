function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if(elemento && elemento.localName === 'audio') {
        elemento.play();
    }
    else {
        console.log('Elemento não encontrado ou seletor inválido');
    };
};

 const listaDeTeclas = document.querySelectorAll('.tecla');
 
 for (var contador = 0; contador < listaDeTeclas.length; contador ++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    
    //template string
    const idAudio = `#som_${instrumento}`;
    //console.log(idAudio);

    tecla.onclick = function() {
        tocaSom(idAudio);
    };

    tecla.onkeydown = function(e){

        if(e.code === 'Enter' || e.code === 'Space') {
            tecla.classList.add('ativa');
        }
    }
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa')
    }
};
