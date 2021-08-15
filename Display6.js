class Display {
    constructor(displayValorAnterior, displayValorActual) {   
            this.displayValorActual = displayValorActual;
        this.displayValorAnterior = displayValorAnterior;

        this.calculador = new Calculadora();
        this.tipoOperacion = undefined;
        this.valorActual = '';
        this.valorAnterior = '';
        this.signos = {
            sumar: '+',
            dividir: '/',
            multiplicar: 'x',
            restar: '-',
        }
    }
    // borrar es la funcion de reducir un valor concatenado no
    // dos notas importantes el valor slience elimina parte de los 
    // string asi que hay que configurarle el parametro a borrrrrr

    borrar() {
        this.valorActual = this.valorActual.toString().slice(0,-1);
        this.imprimirValores();
    }
 
    // borrrrrrrrrrrar borrarTodo es la funcion utilizada para eliminar valores de la pantalla
    borrarTodo() {
        this.valorActual = '';
        this.valorAnterior = '';
        this.tipoOperacion = undefined;
        this.imprimirValores();
    }



//funcion que ba a recibir los signos desde el html los cuales son declarados en index.js 
calculo(tipo) {
    this.tipoOperacion !== 'igual' && this.calcular();
    this.tipoOperacion = tipo;
    this.valorAnterior = this.valorActual || this.valorAnterior;
    this.valorActual = '';
    this.imprimirValores();
}

    // se agrega el valor actual y se  concatena con le anterior 
    // se agrega la condicon para el punto que si no existe se ponga de lo contrario no se retorne
    agregarNumero(numero) {
        if(numero === '.' && this.valorActual.includes('.')) return
        this.valorActual = this.valorActual.toString() + numero.toString();
        
        this.imprimirValores();
    }

    


    //funcion mostrarlo la pantalla mustra los valores
    imprimirValores() {
        this.displayValorActual.textContent = this.valorActual;
        this.displayValorAnterior.textContent = `${this.valorAnterior} ${this.signos[this.tipoOperacion] || ''}`;
      }
     
    calcular() {
        const valorAnterior = parseFloat(this.valorAnterior);
        const valorActual = parseFloat(this.valorActual);

        if( isNaN(valorActual)  || isNaN(valorAnterior) ) return

        this.valorActual = this.calculador[this.tipoOperacion](valorAnterior, valorActual);
    }
 // aqui se comienza a realizar los calculos de los toString
}