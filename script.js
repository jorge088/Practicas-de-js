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
    let resultado = eval(operando1 + '+' + operando2);
    document.getElementById('calculadora-resultado').innerText = resultado;
});
document.getElementById('btnRestar').addEventListener('click', function Restar() {
    let operando1 = document.calculadora.operando1.value;
    let operando2 = document.calculadora.operando2.value;
    let resultado = eval(operando1 + '-' + operando2);
    document.getElementById('calculadora-resultado').innerText = resultado;
});
document.getElementById('btnMultiplicar').addEventListener('click', function Multiplicar() {
    let operando1 = document.calculadora.operando1.value;
    let operando2 = document.calculadora.operando2.value;
    let resultado = eval(operando1 + '*' + operando2);
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
document.getElementById('btnCambiarFondoChx').addEventListener('click', function cambiarColor() {
    var i = 0;
    for (i; i < document.cambiarColorForm.colores.length; i++) {
        if (document.cambiarColorForm.colores[i].checked) {
            break;
        }
    }
    document.getElementById('cuadro2').setAttribute(`style`, `background-color:${document.cambiarColorForm.colores[i].value};`)

});

//Practica 4
var provincias_1 = ["-", "Andalucía", "Asturias", "Baleares", "Canarias", "Castilla y León", "Castilla-La Mancha", "..."];
var provincias_2 = ["-", "Salta", "San Juan", "San Luis", "La Rioja", "La Pampa", "..."];
var provincias_3 = ["-", "Cali", "Santamarta", "Medellin", "Cartagena", "..."];
var provincias_4 = ["-", "Aisne", "Creuse", "Dordogne", "Essonne", "Gironde ", "..."];
var todasProvincias = [
    [],
    provincias_1,
    provincias_2,
    provincias_3,
    provincias_4,
];
document.provincias.pais.addEventListener('change', function cambiarProvincia() {
    let pais = document.provincias.pais[document.provincias.pais.selectedIndex].value;
    if (pais != 0) {
        let mis_provincias = todasProvincias[pais];
        let num_provincias = mis_provincias.length;
        document.provincias.provincia.length = num_provincias;
        for (let i = 0; i < num_provincias; i++) {
            document.provincias.provincia.options[i].value = mis_provincias[i];
            document.provincias.provincia.options[i].text = mis_provincias[i];
        }
    } else {
        document.provincias.provincia.length = 1;
        document.provincias.provincia.options[0].value = "-";
        document.provincias.provincia.options[0].text = "-";
    }
    document.provincias.provincia.options[0].selected = true;
});
document.provincias.provincia.addEventListener('change', function escribirSeleccion(){
    document.getElementById('practica4__eleccion').innerText= document.provincias.pais[document.provincias.pais.selectedIndex].text + ' - ' + document.provincias.provincia[document.provincias.provincia.selectedIndex].text;
});
