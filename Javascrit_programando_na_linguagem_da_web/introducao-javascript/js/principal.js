var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector('.info-altura');
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector('.info-imc')

var pesoEhValido = true;
var alturaEhvalida = true;

if(peso <= 0 || peso >= 1000){
    tdImc.textContent = 'Peso inválido';
    console.log('Peso inválido');
    pesoEhValido = false;
}

if(altura <= 0 || altura >= 3.00 ) {
    tdImc.textContent = 'Altura inválida';
    console.log('Altura inválida');
    alturaEhvalida = false
}

if(pesoEhValido && alturaEhvalida){
    var imc = peso/(altura*altura);
    tdImc.textContent = imc;
}
