function colores() {

    const botonesNumerosYOperadores =  document.querySelectorAll(".botonColor");


    function verde() {
        if(document.getElementById('verde').checked) {
            calc.style.background ="#017c5f";
            calc.style.boxShadow ="10px 8px 0px 5px #01644d";
            //botonesNumerosYOperadores.style.background ="#00795c";
            //botonesNumerosYOperadores.style.boxShadow ="5px 5px 10px -3px #00000050, -5px -5px 10px 3px #00745950";
            botonesNumerosYOperadores.forEach(boton => {
                boton.style.background = "#017c5f";
                boton.style.boxShadow = "5px 5px 10px -3px #00000050, -5px -5px 10px 3px #00745950";
            
            })
        }
    }
    function rosado() {

        if(document.getElementById('rosado').checked) {
            calc.style.background ="#d88994";
            calc.style.boxShadow ="10px 8px 0px 5px #c77f89";
            //botonesNumerosYOperadores.style.background ="#d88994";
            //botonesNumerosYOperadores.style.boxShadow ="5px 5px 10px -3px #00000050, -5px -5px 10px 3px #c77f89";
            botonesNumerosYOperadores.forEach(boton => {
                console.log("Style", boton.style)
                boton.style.background = "#d88994";
                boton.style.boxShadow = "5px 5px 10px -3px #00000050, -5px -5px 10px 3px #c77f89";
            
            })
        }
    }
    function naranja() {
        if(document.getElementById('naranja').checked) {
            calc.style.background ="#FF8000";
            calc.style.boxShadow ="10px 8px 0px 5px #db6e00";
            //botonesNumerosYOperadores.style.background ="#FF8000";
            //botonesNumerosYOperadores.style.boxShadow ="5px 5px 10px -3px #00000050, -5px -5px 10px 3px #db6e00";
            botonesNumerosYOperadores.forEach(boton => {
                console.log("Style", boton.style)
                boton.style.background = "#FF8000";
                boton.style.boxShadow = "5px 5px 10px -3px #00000050, -5px -5px 10px 3px #db6e00";
            
            })
        }
    }
    function gris() {
        if(document.getElementById('gris').checked) {
            calc.style.background ="#909090";
            calc.style.boxShadow ="10px 8px 0px 5px #505050";
            //botonesNumerosYOperadores.style.background ="#909090";
            //botonesNumerosYOperadores.style.boxShadow ="5px 5px 10px -3px #00000050, -5px -5px 10px 3px #505050";
            botonesNumerosYOperadores.forEach(boton => {
                console.log("Style", boton.style)
                boton.style.background = "#909090";
                boton.style.boxShadow = "5px 5px 10px -3px #00000050, -5px -5px 10px 3px #505050";
            
            })
        }
    }

    //NOTA: Esto pone las funciones con alcance global
    window.naranja = naranja;
    window.gris = gris;
    window.rosado = rosado;
    window.verde = verde;
}

window.addEventListener("DOMContentLoaded", colores) // Permite que los eventos se carguen al terminar de cargar el DOM