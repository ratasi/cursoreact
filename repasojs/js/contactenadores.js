const nombre = "Rafa";
const trabajo = "Desarrollador Web";


//contactenar JavaScript
console.log('Nombre: ' + nombre + ', Trabajo: ' + trabajo);
console.log(`Nombre: ${nombre}, Trabajo: ${trabajo}`);

//Concatenar con múltiples líneas
const contenedorApp = document.querySelector('#app');


//Forma vieja
// let html = '<ul>' +
//                 '<li> Nombre: ' + nombre + '</li>' +
//                 '<li> Trabajo:' + trabajo + '</li>' +
//             '</ul>';


let html = `
            <ul>
                <li>Nombre: ${nombre}</li>
                <li>Trabajo: ${trabajo}</li>
            </ul>

        `;

contenedorApp.innerHTML = html;