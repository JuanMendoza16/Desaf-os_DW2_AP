let precioProducto = document.getElementById('precioProducto');
let titulo = document.querySelector('#nombreProducto')
setTimeout(()=> {
    precioProducto.innerText = 'Precio: $450'
    precioProducto.style.fontSize = '20px'
    precioProducto.style.fontFamily = 'Calibri'
    precioProducto.style.color = 'blue'
    titulo.style.color = 'red'
},2000)