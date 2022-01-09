//Practica 1
document.getElementById('btnCambiarFondo').addEventListener(`click`, function cambiarFondo() {
    var text = document.getElementById('input');
    var cuadro = document.getElementById('cuadro');
    cuadro.setAttribute('style', `background-color: ${text.value} ;`);

});
document.getElementById('btnCambiarFondoRojo').addEventListener(`click`, function cambiarARojo() {
    document.getElementById('cuadro').setAttribute('style', `background-color: red ;`);
});
document.getElementById('btnCambiarFondoVerde').addEventListener(`click`, function cambiarAVerde() {
    document.getElementById('cuadro').setAttribute('style', `background-color: green ;`);
});
document.getElementById('btnCambiarFondoAmarillo').addEventListener(`click`, function cambiarAAmarillo() {
    document.getElementById('cuadro').setAttribute('style', `background-color: yellow ;`);
});
document.getElementById('btnCambiarFondoAzul').addEventListener(`click`, function cambiarAAzul() {
    document.getElementById('cuadro').setAttribute('style', `background-color: blue ;`);
});

//Practica 2

document.getElementById('btnSumar').addEventListener('click', function Sumar() {
    let operando1 = document.calculadora.operando1.value;
    let operando2 = document.calculadora.operando2.value;
    let resultado = eval(operando1 +'+'+ operando2);
    document.getElementById('calculadora-resultado').innerText = resultado;
});
document.getElementById('btnRestar').addEventListener('click', function Restar() {
    let operando1 = document.calculadora.operando1.value;
    let operando2 = document.calculadora.operando2.value;
    let resultado = eval(operando1 +'-'+ operando2);
    document.getElementById('calculadora-resultado').innerText = resultado;
});
document.getElementById('btnMultiplicar').addEventListener('click', function Multiplicar() {
    let operando1 = document.calculadora.operando1.value;
    let operando2 = document.calculadora.operando2.value;
    let resultado = eval(operando1 +'*'+ operando2);
    document.getElementById('calculadora-resultado').innerText = resultado;
});
document.getElementById('btnDividir').addEventListener('click', function Dividir() {
    let operando1 = document.calculadora.operando1.value;
    let operando2 = document.calculadora.operando2.value;
    if (operando2 == 0) {
        window.alert("No se puede dividir por cero!");
    } else {
        let resultado = eval(operando1 + '/' + operando2);
        document.getElementById('calculadora-resultado').innerText = resultado;
    }
});

//Practica 3
document.getElementById('btnCambiarFondoChx').addEventListener('click',function cambiarColor() {
    var i = 0;
    for (i; i < document.cambiarColorForm.colores.length; i++) {
        if (document.cambiarColorForm.colores[i].checked) {
            break;
        }
    }
    document.getElementById('cuadro2').setAttribute(`style`, `background-color:${document.cambiarColorForm.colores[i].value};`)

});

