let nuevoParafo = document.createElement('p')
nuevoParafo.textContent = 'Hola desde js'

const productos = ["Smartphone", "Smartwatch", "Computadora", "Portátil", "Tablet"]

productos.forEach(prod => {
    let h2 = document.createElement('h2');
    h2.innerHTML = `<p>Producto: ${prod}</p>`;
    document.body.appendChild(h2);
    setTimeout(() => {
        h2.style.color = 'yellow'
    }, 1000);
});

setTimeout(() => {
    let nuevoParafo = document.createElement('p')
    nuevoParafo.textContent = 'Timeout'

    const productos = ["Memoria RAM", "Tarjeta Gráfica", "Procesador", "Teclado", "Mouse"]
    for (const prod of productos) {
        let h2 = document.createElement('h2');
        h2.innerHTML = `<p>Producto: ${prod}</p>`;
        document.body.appendChild(h2);
        h2.style.color = 'cyan'
    }
}, 1000);
