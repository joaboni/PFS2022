import * as rls from 'readline-sync';

let numero1 = rls.questionFloat("Escriba un primer numero: ");
let numero2 = rls.questionFloat("Escriba un segundo numero: ");
let numero3 = rls.questionFloat("Escriba un tercer numero: ");

if (numero1 > numero2 && numero1 > numero3) {
    console.log("El numero mayor es el", numero1)
}

else if (numero2 > numero1 && numero2 > numero3){
   console.log("El numero mayor es el", numero2)
}

else {
    console.log("El numero mayor es el", numero3)
 }