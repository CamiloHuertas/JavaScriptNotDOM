let nombre = 'Camilo',
    edad = 13;


//Objeto norma;, sin objetos literales
const perro = {
  nombre: nombre,
  edad: edad,
  ladrar: function (){
    console.log('Guau guau!!');
  }
}

console.log(perro);
perro.ladrar();


//Objetos literales
const dog = {
  nombre,
  edad,
  raza: 'Callejero',
  ladrar(){
    console.log('GUAUUUUUUUUUU!');
  }
}

console.log(dog);
dog.ladrar();