import * as rls from "readline-sync";


console.log("Sabremos los numeros son multiplos")

let numero1:number=rls.questionInt("Primer numero: ")
let numero2:number=rls.questionInt("Segundo numero: ")
function multiplos (numero1: number, numero2:number): boolean {

    if (0 == numero1%numero2 )
    {
        return true
    }
    else if (0!=numero1%numero2)
    {
        return false
    }
}

console.log (multiplos (numero1,numero2))