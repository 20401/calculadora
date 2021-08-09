class Display {
    constructor(displayValorActual, displayValorAnterior) {
        this.displayValorAnterior = displayValorAnterior;
        this.displayValorActual = displayValorActual;
        this.calculador = new Calculadora();
        this.valorActual = '';
        this.valorAnterior = '';
    }
    // se agrega el valor actual y se  concatena con le anterior 
    // se agrega la condicon para el punto que si no existe se ponga de lo contrario no se retorne
    agregarNumero(numero) { 
        if (numero=== '.' && this.valorActual.includes('.'))return
        this.valorActual = this.valorActual.toString() + numero.toString();
        this.imprimirValores();
    }

    //funcion mostrarlo la pantalla mustra los valores
    imprimirValores() {
        this.displayValorActual.textContent = this.valorActual;
        this.displayValorAnterior.textContent = `${this.valorAnterior}${this.signos[this.tipoOperacion] || ''}`;
    }



}