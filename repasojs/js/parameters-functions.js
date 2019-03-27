// parámetros por default en las funciones

function actividad(nombre = 'Walter', actividad = 'Enseñar React') {
    console.log(`La persona ${nombre}, esta realizando la actividad ${actividad}`);
}

actividad('Raul', 'Aprendiendo Boostrap');
actividad();
actividad('Pepe');



///Forma nueva
const actividad2 = function (nombre = 'Nombre function 2', actividad = 'Enseñar Reacct') {
    console.log(`La persona ${nombre}, esta realizando la actividad ${actividad}`);

}

actividad2();
actividad2('Nombre con Const', 'Cambiando function');