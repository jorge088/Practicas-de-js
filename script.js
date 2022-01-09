
function cambiarFondo() {
    var text = document.getElementById('input');
    var cuadro = document.getElementById('cuadro');
    cuadro.setAttribute('style', `background-color: ${text.value} ;`);

}
function cambiarFondoCuadro(color) {
    var cuadro = document.getElementById('cuadro');
    cuadro.setAttribute('style', `background-color: ${color} ;`);
}

function calcular(operacion) {
    let operando1 = document.calculadora.operando1.value;
    let operando2 = document.calculadora.operando2.value;
    if (operacion == '/' && operando2 == 0) {
        window.alert("No se puede dividir por cero!");
    } else {
        let resultado = eval(operando1 + operacion + operando2);
        document.getElementById('calculadora-resultado').innerText = resultado;
    }

}