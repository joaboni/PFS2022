import * as rls from 'readline-sync';

let vuelta1 = rls.questionFloat("Tiempo 1era vuelta");
let vuelta2 = rls.questionFloat("Tiempo 2da vuelta");
let vuelta3 = rls.questionFloat("Tiempo 3era vuelta"); 
let vuelta4 = rls.questionFloat("Tiempo 4ta vuelta");

let TiempoTotal = (vuelta1+vuelta2+vuelta3+vuelta4);
let PrmoedioTiempo = (TiempoTotal/4);

console.log("El tiempo total de 4 vueltas", TiempoTotal);
console.log("El promedio del tiempo es de", PrmoedioTiempo);
