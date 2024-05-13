import * as readlineSync from "readline-sync";
let base : number = readlineSync.questionInt (" Ingrese la base:");
let exponente : number = readlineSync.questionInt (" Ingrese  el exponente:");
let resultado : number =1;
let i : number = 0;
 
function resultadoPotencia(numero1 : number, numero2 : number) : number{
    resultado = 1;
for (i=0;i<exponente; i++){
    resultado = resultado * base
}
     return resultado;
}
    if (exponente >0){
        resultado = resultadoPotencia(base,exponente);
        console.log("El resultado es:"+ resultado);
    }else if (exponente ==0){
        resultado = 1
        console.log("El resultado es: "+ resultado)
    } else if (exponente <0){console.log("Solo ingrese un exponente mayor o igual a 0")
        exponente = readlineSync.questionInt("Ingrese exponente:");
        resultado = resultadoPotencia(base,exponente);
        console.log("El Resultado del número elevado a la potencia es:");
}
    
