function sumarProductos(precioUnitario, cantidadDeseada){
    let totalGastado = precioUnitario * cantidadDeseada;
    return totalGastado;
}

let precio = 900;
let cantidad = 5;
let totalCompra = sumarProductos(precio, cantidad);
console.log(`El total de la compra es $${totalCompra}`);
