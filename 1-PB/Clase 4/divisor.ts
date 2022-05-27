import * as rls from "readline-sync";


let dividendo: number = rls.questionInt("Numero que divide: ");

function multiplo(dividendo: number, divisor: number):boolean{    
    return (dividendo%divisor)==0;
}

function divisoresCant(dividendo: number):number
{
    let cont: number =0
    let i: number;
    for (i=1; i<=dividendo; i++)
    if (multiplo(dividendo,i)){
        cont ++
    } 
    return cont  
}
console.log(""+ dividendo + " es divisor de: " + divisoresCant(dividendo));