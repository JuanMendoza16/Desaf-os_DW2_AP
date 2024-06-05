let precioProducto = document.getElementById("precioProducto")
let titulo = document.querySelector("#nombreProducto")

setTimeout(()=>{
precioProducto.innerText = "Precio: $450"
titulo.style.color = "red"
},2000)