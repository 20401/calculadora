const displayValorActual = document.getElementById('valor-act');
const botonesNumeros = document.querySelectorAll('.numero');
const botonesOperador = document.querySelectorAll('.operador');
const displayValorAnterior = document.getElementById('valor-ant');
//aqui se declara la constante para funcionar en el display 
const display = new Display(displayValorActual, displayValorAnterior);

// en esta funcion se obtiene click sobre la aplicacion 
//cada vez que se presiona un numero
botonesNumeros.forEach(boton => {
    boton.addEventListener('click', () => display.agregarNumero(boton.innerHTML));
});

// en esta se obtine los operadores para poderr facilitar ls operaciones se agregan de manera concatenad osea texto


botonesOperador.forEach(boton => {
    boton.addEventListener('click', () => display.Calculo(boton.value))
});
// botonesOperado.forEach(boton => {
//     boton.addEventListener('click', () => display.agregarNumero);
// });

