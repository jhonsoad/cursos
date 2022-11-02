var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");
// console.log(paciente);

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];
    console.log(paciente);

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector('.info-altura');
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector('.info-imc')

    var pesoEhValido = true;
    var alturaEhvalida = true;

    if(peso <= 0 || peso >= 1000){
        tdImc.textContent = 'Peso inválido!';
        console.log('Peso inválido');
        pesoEhValido = false;
        paciente.classList.add('paciente-invalido');
    }

    if(altura <= 0 || altura >= 3.00 ) {
        tdImc.textContent = 'Altura inválida!';
        console.log('Altura inválida');
        alturaEhvalida = false
        paciente.classList.add('paciente-invalido');
    }

    if(pesoEhValido && alturaEhvalida){
        var imc = peso/(altura*altura);
        tdImc.textContent = imc.toFixed(2);
    }
}
