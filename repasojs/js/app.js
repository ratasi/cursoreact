//Crear variables

///////////////// Usando  var //////////////////////
// var musica = 'Rock';

// if (musica) {
//     var musica = 'Grunge';
//     console.log('dentro del if', musica );
// }

// console.log('Fuera del if', musica);

//Esto muestra los dos console log Grunge por el var



///////////////// Usando  let //////////////////////
// let musica = 'Rock';

// if (musica) {
//     let musica = 'Grunge';
//     console.log('dentro del if', musica);
// }

// console.log('Fuera del if', musica);

//De esta forma quedaría:
    //dentro del if Grunge
    //dentro del if Rock



///////////////// Usando  const //////////////////////
const musica = 'Rock';

if (musica) {
    const musica = 'Grunge';
    console.log('dentro del if', musica);
}

console.log('Fuera del if', musica);
//De esta forma quedaría:
    //dentro del if Grunge
    //dentro del if Rock