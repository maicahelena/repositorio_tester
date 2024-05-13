import * as readlineSync from "readline-sync";

let numeroPar=readlineSync.questionInt("Ingrese el numero:")
     if (numeroPar == 0){
        console.log("El numero es cero")
    }
     else if (numeroPar %2 == 0)
     {
        console.log("El numero es par");
     }
     else   {
        console.log("El numero es impar")
     }
     
    
      
      
     
 