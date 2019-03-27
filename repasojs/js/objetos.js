
const nombreTarea = 'Pasea al dog';

export default nombreTarea;


//export una función
export const crearTarea = (tarea, urgencia) => {
    return `La tarea ${tarea} tiene una urgencia de ${urgencia}`;
}

class Tarea {
    constructor(nombre, prioridad) {
        this.nombre = nombre;
        this.prioridad = prioridad;
    }
    mostrar() {
        console.log (`${this.nombre} tiene una prioridad de ${this.prioridad}`);
    }
}

class ComprasPendientes extends Tarea {
    constructor(nombre, prioridad, cantidad) {
        super(nombre, prioridad);
        this.cantidad = cantidad;
    }
    mostrar() {
        super.mostrar();
        console.log(`y la cantidad de ${this.cantidad}`);
    }
}
//crear los objetos

let tarea1 = new Tarea('Aprender JavaScript', 'Alta');
// console.log(tarea1.mostrar());


//Compras

let compra1 = new ComprasPendientes('Jabon', 'Urgente', 3);
compra1.mostrar();