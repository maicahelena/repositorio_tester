"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var base = readlineSync.questionInt(" Ingrese la base:");
var exponente = readlineSync.questionInt(" Ingrese  el exponente:");
var resultado = 1;
var i = 0;
function resultadoPotencia(numero1, numero2) {
    resultado = 1;
    for (i = 0; i < exponente; i++) {
        resultado = resultado * base;
    }
    return resultado;
}
if (exponente > 0) {
    resultado = resultadoPotencia(base, exponente);
    console.log("El resultado es:" + resultado);
}
else if (exponente == 0) {
    resultado = 1;
    console.log("El resultado es: " + resultado);
}
else if (exponente < 0) {
    console.log("Solo ingrese un exponente mayor o igual a 0");
    exponente = readlineSync.questionInt("Ingrese exponente:");
    resultado = resultadoPotencia(base, exponente);
    console.log("El Resultado del número elevado a la potencia es:");
}
