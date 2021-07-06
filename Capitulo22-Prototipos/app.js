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

const snoopy = new Animal('Snoopy', 'Macho'),
      LolaBunny = new Animal('Lola Bunyy', 'Hembra');

console.log(snoopy);
console.log(LolaBunny);













