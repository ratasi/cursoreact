'use strict'

//Arreglos y .map

// const carrito = ['Producto 1','Producto 2', 'Producto 3'];

// console.log(carrito);

// const appContenedor = document.querySelector('#app');

// Forma Vieja
// let html = '';
// carrito.forEach(producto => {
//     html += `<li>${producto}</li>`;
// })
// appContenedor.innerHTML = html;


// carrito.map(producto => {
//     return 'el producto es ' + producto;
// });


const persona = {
    nombre: 'Juan',
    profesion: 'Developer',
    edad: 500
}

console.log(Object.keys(persona));