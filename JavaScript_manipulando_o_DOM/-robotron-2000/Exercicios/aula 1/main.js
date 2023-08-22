document.addEventListener("DOMContentLoaded", function () {

    const container = document.querySelector(".container");
    const texto = document.getElementById("texto");

    container.addEventListener("dblclick", mudaTexto);

    function mudaTexto() {
        if (texto.innerHTML === "O inverno está chegando") {
            texto.innerHTML = "O inverno já chegou";
            return;
        }
        if (texto.innerHTML === "O inverno já chegou") {
            texto.innerHTML = "O inverno está chegando";
            return;
        } else {
            console.log("Erro");
        }
    }
});
