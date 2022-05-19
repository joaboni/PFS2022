console.log("Bienvenido a mi tienda, donde llevando mas de 1000$ en productos tenes un descuento de 10%");
console.log("Cada prenda vale 100$");

import * as rls from 'readline-sync';

let Prendas = rls.questionFloat("Cuantas prendas vas a llevar?:");

let precioPrendaTotal = (Prendas * 100);

if (precioPrendaTotal > 1000) {
    var descuento = precioPrendaTotal * 0.1
    console.log("Su compra supero los 1000$ se le hara un descuento del 10%")
    console.log("Su compra total, con descuento, es: " + (precioPrendaTotal - descuento))
}

else {
   console.log("Su compra es de", precioPrendaTotal)
}