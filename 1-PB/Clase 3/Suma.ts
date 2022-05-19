import * as readlineSync from 'readline-sync'

let numero1 : number
let numero2 : number
let resultado : number

numero1 = readlineSync.questionInt('El primer numero: ')
numero2 = readlineSync.questionInt('El segundo numero: ')
resultado = 0

for(numero1; numero1<= numero2; numero1++) 
{
    resultado = resultado + numero1;
}

console.log('El resultado es:',resultado)