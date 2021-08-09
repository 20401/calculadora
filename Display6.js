class Display {
    consultor(displayValorActual, displayValorAnterior) {
        this.displayValorAnterior = displayValorAnterior;
        this.displayValorActual = displayValorActual;
        this.calculador = new Calculadora();
        this.valorActual = '';
        this.valorAnterior = '';
    }
    agregarNumero(numero) {
        this.valorActual = numero;
        this.imprimirValores
    }
    imprimirValores() {
        this.displayValorActual.textContent = this.valorActual;
        this.displayValorAnterior.textContent = `${this.valorAnterior}${this.signos[this.tipoOperacion] || ''}`;
    }

//agregar un numero y mostrarlo la pantalla

}