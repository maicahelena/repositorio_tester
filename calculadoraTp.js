"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var i, linea;
var numero1 = rls.questionInt("Ingrese un número: ");
;
var numero2 = rls.questionInt("Ingrese un número: ");
;
var opcionMenu = rls.questionInt("Ingrese 1 para sumar, 2 para restar, otra para salir : ");
if (opcionMenu == 1) {
    dibujarGuiones();
    console.log("el resultado es: ", numero1 + numero2);
    dibujarGuiones();
}
else if (opcionMenu == 2) {
    dibujarGuiones();
    console.log("el resultado es: ", numero1 - numero2);
    dibujarGuiones();
}
function dibujarGuiones() {
    var i;
    var linea = "";
    for (i = 0; i <= 40; i++) {
        linea = linea + "-";
    }
    ;
    console.log(linea);
}
