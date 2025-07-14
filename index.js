let contenedor = document.querySelector('.contenedor')

let productos = [
    {   
        id: 1,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_861540-MLA87731742953_072025-O.webp",
        alt: 'imagen de auto',
        marca: 'Ford',
        modelo: 'Focus Titanium',
        precio: 14000,
        descripcion: '2014 | 100.000km',
        ubicacion: 'Capital Federal'
    }
,
    {   
        id: 2,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_647371-MLA83135983680_032025-O.webp",
        alt: 'imagen de auto',
        marca: 'Ford',
        modelo: 'Fiesta SE',
        precio: 14000,
        descripcion: '2014 | 100.000km',
        ubicacion: 'Capital Federal'
    }
,
    {
        id: 3,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_647371-MLA83135983680_032025-O.webp",
        alt: 'imagen de auto',
        marca: 'Ford',
        modelo: 'Fiesta SE',
        precio: 14000,
        descripcion: '2014 | 100.000km',
        ubicacion: 'Capital Federal'
    }  
,
    {   
        id: 4,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_647371-MLA83135983680_032025-O.webp",
        alt: 'imagen de auto',
        marca: 'Ford',
        modelo: 'Fiesta SE',
        precio: 14000,
        descripcion: '2014 | 100.000km',
        ubicacion: 'Capital Federal'
    }     
];

let productos2 = productos.map( producto => {
    return `
    <div id='card'>
        <div>
            <img class="card-img" src="${producto.imagen} alt="${productos.marca}">
        </div>

        <div>
            <h1 class="card-titulo">${producto.marca}  ${producto.modelo}
            <p class="card-precio">${producto.precio.toFixed()}</p>
            <p class="card-descripcion">${producto.descripcion}</p>
            <p class="card-ubicacion">${producto.ubicacion}</p>
        </div>

        <div>
        
        <button class="card-boton" id='btn-agregar-${producto.id}'>Agregar</button>

            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill quitar" viewBox="0 0 16 16">
            <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
            </svg>
        </div>
    </div>
    `
});

contenedor.innerHTML = productos2.join('');

function renderizarProductos(){
    const prodcutosHtml = p
}

function adjuntarEvento (){
    productos.forEach( producto => {
        const boton = document.getElementById(`btn-agregar-${producto.id}`)
        boton.addEventListener('click', ()=>{
            agregarAlCarrito(producto);        
        })
    })
}

function agregarProductoalCarrito(productoAAgregar){
    let carrito = JSON.parse(localStorage.getItem('carritoDeCompras')) || [];

    const indiceProductoExistente = carrito.findIndex(item =>
        item.id === productoAAgregar.id);

        if(indiceProductoExistente !== -1){
            carrito[indiceProductoExistente].cantidad++;
        } else {
            carrito.push({
                id: productoAAgregar.id,
                nombre: productoAAgregar.nombre,
                precio: productoAAgregar.precio,
                cantidad: 1,
            })
        }

    localStorage.setItem()
}

renderizarProductos ('carritoDeCompras', JSON.stringify(carrito));