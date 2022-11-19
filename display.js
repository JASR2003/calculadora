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

    agregarNumero(numero) {
        if (numero === "." && this.valorActual.includes(".")) return;
        this.valorActual = this.valorActual.toString() + numero.toString();
        this.imprimirValores();
    }

    imprimirValores() {
        this.displayValorActual.textContent =  `${this.valorAnterior} ${this.signos[this.tipoOperacion] || ""} `;
        // this.displayValorAnterior.textContent = `${this.valorAnterior} ${this.signos[this.tipoOperacion] || ""} `;
        this.displayValorAnterior.textContent = this.operaciones.join(" ");
    }

    calcular() {
        const valorAnterior = parseFloat(this.valorAnterior);
        const valorActual = parseFloat(this.valorActual);
        this.operaciones = this.operaciones.concat([this.signos[this.tipoOperacion], isNaN(valorActual) ? "" : valorActual])

        if (isNaN(valorActual) || isNaN(valorAnterior)) return
        this.valorActual = this.Calculador[this.tipoOperacion](valorAnterior, valorActual);
    }
}