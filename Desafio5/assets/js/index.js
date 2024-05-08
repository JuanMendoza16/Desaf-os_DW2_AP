const productos = ["Smartwatch", "Tablet", "Altavoces", "Laptop", "Mouse"];

for(let i = 0; i < productos.length; i++){
    console.log(`Producto ${i + 1}: ${productos[i]}`);
}

function eliminarStock(stockActual){
    stockActual.pop();
    return stockActual;
}
let stock = productos
for(let i = productos.length; i > 0 ; i--){
    stock = eliminarStock(stock);
    if(i == 1){
        console.log("Sin Stock.")
        break;
    }
    console.log("Stock Actual:");
    console.log(stock.toString());
}