//arreglos
'use strict'

const personas =[
    {nombre: 'Pepe', edad: 23, aprendiendo: 'JavaScript'},
    {nombre: 'Juan', edad: 12, aprendiendo: 'Adobe'},
    {nombre: 'Raul', edad: 55, aprendiendo: 'React'},
    {nombre: 'Agus', edad: 87, aprendiendo: 'JSon'},
]
// console.log(personas);

//Filtrar mayores de 28
const mayores = personas.filter(persona => {
    return persona.edad > 28;
});
// console.log(mayores);


//Seleccionar una persona en concreto
const juan = personas.find(persona => {
    return persona.nombre === 'Juan';
});
console.log('Juan está aprendiendo: ' + juan.aprendiendo);


let total = personas.reduce((edadTotal, persona) => {
    return edadTotal + persona.edad;
}, 0);

console.log(personas.length);
let media = personas.length;
console.log('Hay : ' + media + ' personas que hacen la media de : ' + total/media);