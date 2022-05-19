import * as rls from 'readline-sync';

let Precio = rls.questionFloat("Escriba el precio del producto: ");
let Cantidad = rls.questionFloat("Escriba la cantidad: ");
let Mes : string = rls.question ("Escriba el mes de la compra: ")

let precioTotal = (Precio * Cantidad)

if
(Mes == "Octubre")
{
    var descuento = precioTotal * 0.15
    console.log("Se realizara un descuento del 15% por aniversario.")
    console.log("Su compra con descuento es de", precioTotal - descuento)
}
else if
(Mes != "Octubre")
{
    console.log("Su compra es de", precioTotal)
}