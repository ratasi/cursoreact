//Objetos





//Objet literal
// const persona = {
//     nombre: 'Juan',
//     profesion: 'Desarrollador Web',
//     edad:500
// }
// console.log(persona);

// const mostrarCliente = mostrarInformacionTarea(persona.nombre, persona.profesion);
// console.log(mostrarCliente);

//Object Constructor
function tarea(nombre, urgencia){
    this.nombre = nombre;
    this.urgencia = urgencia;
}

//Agregar un prtotype a tarea
tarea.prototype.mostrarInformacionTarea = function(){
    return `La tarea ${this.nombre} tiene una prioridad de ${this.urgencia}`;
}

//crear una nueva tarea
const tarea1 = new tarea('Aprender JavaScript', 'Urgente');
console.log(tarea1.mostrarInformacionTarea() );

