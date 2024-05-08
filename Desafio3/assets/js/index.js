let nombreProducto = "Laptop";
let precioUnitario = 900;
let cantidadDeseada = prompt("¿Cuántas unidades de Laptops desea comprar?");

let costoTotal = precioUnitario * cantidadDeseada;

if(cantidadDeseada >= 5){
    costoTotal *= 0.9;
    alert(`A su compra se le hizo un descuento del 10%. Total a pagar en dólares es $${costoTotal}`);
}
else{
    alert(`Total a pagar en dólares es $${costoTotal}`);
}