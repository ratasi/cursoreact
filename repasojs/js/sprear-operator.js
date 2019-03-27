'use strict'

let lenguajes = ['JavaScript', 'PHP', 'Python'];

let[ultimo] = [...lenguajes].reverse();


console.log(lenguajes);
console.log(ultimo);



//Suma
function suma(a,b,c){
    console.log(a+b+c);
}

const numeros = [1,2,3];
suma(...numeros);