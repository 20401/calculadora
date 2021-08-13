//en esta parte pondre lo que son los indices y selecionadores ademas de las constantyes
const displayValorAnterior = document.getElementById('valor-anterior');
const displayValorActual = document.getElementById('valor-actual');
const botonesNumeros = document.querySelectorAll('.numero');
const botonesOperadores = document.querySelectorAll('.operador');
//aqui se declar a la constante para funcionar en el display 
const display = new Display(displayValorAnterior, displayValorActual);

// en esta funcion se obtiene click sobre la aplicacion 
//cada vez que se presiona un numero
botonesNumeros.forEach(boton => {
    boton.addEventListener('click', () => display.agregarNumero(boton.innerHTML));
});

// en esta se obtine los operadores para poderr facilitar ls operaciones se agregan de manera concatenad osea texto


botonesOperadores.forEach(boton => {
    boton.addEventListener('click', () => display.calculo(boton.value))
});
// botonesOperado.forEach(boton => {
//     boton.addEventListener('click', () => display.agregarNumero);
// });

