const displayValorActual = document.getElementById("valor-act");
const botonesNumeros = document.querySelectorAll(".numero");
const botonesOperador = document.querySelectorAll(".operador");
const displayValorAnterior = document.getElementById("valor-ant");
const display = new display(displayValorActual,displayValorAnterior);
botonesNumeros.foreach(boton => {
    boton.addEventListener('click', () => display.agregarNumero(boton.innerHTML));
});
