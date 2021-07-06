//Funcion expresada
const saludo = function () {
  console.log('Hola');
}

saludo();

//Funcion declarada
function saludar (){
  console.log('Hola 2');
}

saludar();

//Arrow function|Debe estar en una funcion expresada

//Forma 1
const arrow = () => {
  console.log('Hola 3');
}

//Forma 2
const Arrow = () => console.log('Hola 4');

arrow();
Arrow();

//Arrow functions con parametros

const params = (nombre) => console.log(`Hola ${nombre}`);
params('Camilo');


//Con palabra function
const sumar = function (a,b){
  return a + b
}

console.log(sumar(1,2));

//Con Arrow function

const suma = (a,b) => a + b;

console.log(suma(8,7));

//La diferencia es que con la arrow function podemos omitir el uso de la palabra reservada return


const numeros = [1,2,3,4,5];


//Funcion normal
numeros.forEach(function(el, index){
  console.log(`El elemento ${el} esta en la posicion ${index}`);
})

//Arrow function
console.log('***********************************');

const numbers = [1,2,3,4,5];

numbers.forEach((el, index) => console.log(`El elemento ${el} esta en la posicion ${index}`));

const perro = {
  nombre: 'Camilo',
  ladrar: function(){
    console.log(this);
  }
}

perro.ladrar();


const gato = {
  nombre: 'mitch',
  maullido: () => {
    console.log(this)
  }
}

gato.maullido();













