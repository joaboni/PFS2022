import * as rls from "readline-sync";


let numero: number = rls.questionInt("Un numero: ");
let exponente: number = rls.questionInt("Numero por el que quiere potenciar: ");
function potencia (numero: number, exponente: number): number
{
    return (numero**exponente);
}

while (exponente<0)
{
    console.log("No es valido. Ingrese un exponente mayor o igual a cero.");
    exponente = rls.questionInt("Ingrese el numero del exponente: ");
}

let i: number;
for (i=1; i<=exponente; i++)
{
    console.log("La potencia de "+numero+" exponiendolo a "+i+" es de: "+potencia(numero,i));
}

