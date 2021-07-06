//POO
/* 
Clases
Obetos
  Atributos
  Metodos
*/

const animal = {
  nombre: 'Snoopy',
  sonar () {
    console.log('Hago sonidos porque estoy vivo');
  }
}

const animal2 = {
  nombre: 'Lola bunny',
  sonar () {
    console.log('Hago sonidos porque estoy vivo');
  }
}

console.log(animal);
console.log(animal2);

//Funcion constructora

function Animal (nombre, genero) {
  //Atributos
  this.nombre = nombre;
  this.genero = genero;  
}

//Metodos agregados al prototipo de la funcion constructora
Animal.prototype.sonar = function () {
  console.log('Hago sonidos porque estoy vivo');
}

Animal.prototype.saludo = function (){
  console.log(`Hola me llamo ${this.nombre}`);
}

//Herencia prototipica

function perro (nombre, genero, tamanio) {
  this.super = Animal;
  this.super(nombre, genero);
  this.tamanio = tamanio;
}

//Perro esta heredando de Animal
perro.prototype = new Animal();
perro.prototype.constructor = perro;

//Sobreescrituras de metodos del prototipo padre en hijo

perro.prototype.sonar = function () {
  console.log(`Soy un perro y mi sonido es un ladrido`);
}

perro.prototype.ladrar = function (){
  console.log(`Guau guau!!`);
}




const snoopy = new perro('Snoopy', 'Macho', 'Mediano'),
      LolaBunny = new Animal('Lola Bunyy', 'Hembra');

console.log(snoopy);
console.log(LolaBunny);

snoopy.ladrar();














































