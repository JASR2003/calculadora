class Display {
    constructor(displayValorAnterior, displayValorActual) {
        this.displayValorActual = displayValorActual;
        this.displayValorAnterior = displayValorAnterior;
        this.Calculador = new Calculadora();
        this.tipoOperacion = undefined;
        this.valorActual = "";
        this.valorAnterior = "";
        this.operaciones = []
        this.signos = {
            sumar: "+",
            restar: "-",
            multiplicar: "x",
            dividir: "÷",
        }
    }

    borrar() {
        this.valorActual = this.valorActual.toString().slice(0, -1);
        this.imprimirValores();
    }
    
    borrarTodo() {
        this.valorActual = "";
        this.valorAnterior = "";
        this.tipoOperacion = undefined;
        this.operaciones = [];
        this.imprimirValores();
    }
    
    computar(tipo) {
        this.tipoOperacion !== "igual" && this.calcular();
        this.tipoOperacion = tipo;
        this.valorAnterior = this.valorActual || this.valorAnterior;
        this.valorActual = "";
        this.imprimirValores();
    }
    
    esSigno(cadena) {
        return cadena == "+" || cadena == "-" || cadena == "x" || cadena == "÷";
    }
    
    agregarNumero(numero) {
        if (numero === "." && this.valorActual.includes(".")) return;
        this.valorActual = this.valorActual.toString() + numero.toString();
        if (this.tipoOperacion === "igual" && this.valorActual.includes((numero))) {
            return this.borrarTodo();
        }
        this.imprimirValores();
    }

    imprimirValores() {
        /*if (this.tipoOperacion === "igual") {
            this.displayValorAnterior.textContent =  this.operaciones.join(" ") ;
            // this.displayValorAnterior.textContent = `${this.valorAnterior} ${this.signos[this.tipoOperacion] || ""} `;
            this.displayValorActual.textContent = `${this.valorAnterior}  ${this.signos[this.tipoOperacion] || ""} ${this.valorActual} `;
        } else {*/
        console.log(this.operaciones, "operaciones")
        this.displayValorActual.textContent = this.operaciones.join(" ") ;
        // this.displayValorAnterior.textContent = `${this.valorAnterior} ${this.signos[this.tipoOperacion] || ""} `;
        this.displayValorAnterior.textContent = `${this.valorAnterior} ${this.signos[this.tipoOperacion] || ""} ${this.valorActual} `;
        //}
    }
    
    calcular() {
        const valorAnterior = parseFloat(this.valorAnterior);
        const valorActual = parseFloat(this.valorActual);

        if (isNaN(valorActual) || isNaN(valorAnterior)) return;
        const signo = this.signos[this.tipoOperacion];
        if (this.operaciones.length === 0) {
            this.operaciones = this.operaciones.concat([valorAnterior, signo, valorActual])
        } else {
            this.operaciones = this.operaciones.concat([signo, isNaN(valorActual) ? "" : valorActual])
        }
        this.valorActual = this.Calculador[this.tipoOperacion](valorAnterior, valorActual);
    }
}
//  if (tipoOperacion === "x+" && this.valorActual.lenght.includes("x+")) return;