import * as rls from 'readline-sync';

let numero = rls.questionFloat("Escriba un numero: ");

if(numero == 0)
{
    console.log("El numero es 0")
}

else if(numero %2 == 0)
{
    console.log("El numero es par");
}

else
{
    console.log("El numero es impar");
}