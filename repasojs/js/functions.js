//Creando funciones


//function declaration
saludar('Antes de la function');
function saludar(nombre) {
    console.log("Bienvenido " + nombre);

}
saludar("Después de la función");

// function expression

// cliente("Va a dar error con const");
const cliente = function(nombreCliente){
    console.log("Mostrando datos del cliente :" + nombreCliente );
}

cliente("Juanillo");