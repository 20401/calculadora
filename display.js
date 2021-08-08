class display {
   consultor (displayValorActual,displayValorAnterior){
       this.displayValorAnterior = displayValorAnterior;
  this.displayValorActual =displayValorActual;
  this.calculadora = new Calculadora();
  this.valorActual = "";
  this.valorAnterior = "";
    }
    agregarNumero(numero){
        this.valorActual = numero;
    }
    imprimirValores(){
        this.displayValorActual.textContener = this.valorActual;
        this.displayValorAnterior.textContener = this.valorAnterior;
    }
}