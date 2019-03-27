// Destructuring de objetos - Es extraer valores de un objeto

const aprendiendoJS = {
    version :{
        nueva : 'ES6',
        anterior : 'ES5'
    },
    frameworks : ['React', 'VueJS', 'AngularJS']
}

// console.log(aprendiendoJS);

//version anterior
// let version = aprendiendoJS.version.anterior;
// console.log(version);
// let framework = aprendiendoJS.frameworks[1];
// console.log(framework);


// Destructuring forma nueva
let {anterior} = aprendiendoJS.version;
console.log(anterior);
