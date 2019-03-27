//Promises
'use strict'

const aplicarDescuento = new Promise((resolve, rejec) => {
    setTimeout(( ) => {
        //Si cambiamos a true/false te dice que el código es correcto
        let descuento = true;

        if(descuento) {
            resolve('Descuento aplicado!');
        }else {
            reject('No se pudo aplicar el descuento');
        }
    }, 1000);
});

aplicarDescuento.then(resultado => {
    console.log(resultado);
}).catch(error => {
    console.log(error);
})