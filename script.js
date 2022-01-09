//Practica 1
function cambiarFondo() {
    var text = document.getElementById('input');
    var cuadro = document.getElementById('cuadro');
    cuadro.setAttribute('style', `background-color: ${text.value} ;`);

}
function cambiarFondoCuadro(color) {
    var cuadro = document.getElementById('cuadro');
    cuadro.setAttribute('style', `background-color: ${color} ;`);
}
//Practica 2
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
//Practica 3
function cambiarColor(){
    var i=0;
    for(i; i<document.cambiarColorForm.colores.length;i++){
        if(document.cambiarColorForm.colores[i].checked){
            break;
        }
    }
    document.getElementById('cuadro2').setAttribute(`style`,`background-color:${document.cambiarColorForm.colores[i].value};`)
    
}
