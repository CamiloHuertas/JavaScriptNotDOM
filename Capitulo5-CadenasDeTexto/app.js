let nombre = 'Camilo';
let apellido = 'Huertas';
let saludo = new String('Hola mundo');
let lorem = '           lorem ipsum dolor sit amet cosneiofnis kilo eifjr'

//No hay diferencia entre usar New o no usarla


console.log(nombre, apellido, saludo);
console.log(
  nombre.length, 
  apellido.length, 
  saludo.length,
  //Ejemplos de metodos en Strings
  nombre.toUpperCase(),
  apellido.toLowerCase(),
  lorem.includes('amet'),
  lorem.includes('xd'),
  lorem,
  lorem.trim(),
  lorem.split(' '),
  lorem.split(',')
  );

