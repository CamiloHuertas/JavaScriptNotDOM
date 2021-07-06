console.log(console);
console.error('Esto es un error');
console.warn('Esto es un aviso');
console.info('Esto es un mensaje informativo')
console.log('Un registro de lo que ha pasado en nuestra aplicacion');

let nombre = 'Camilo',
    apellido = 'Huertas',
    edad = 13;

console.log( nombre);
console.log(apellido);
console.log(edad);
console.log(nombre,apellido,edad);
console.log(`Hola mi nombre es ${nombre} ${apellido} y tengo ${edad} anios de edad`);

console,console.log('Hola mi nombre es %s %s y tengo %d anios',nombre,apellido,edad);

console.log(window);
console.log(document);
console.dir(window)
console.dir(document)

console.group('Cursos de el jonas')
console.log('Curso JS');
console.log('Curso node.js');
console.log('Curso node.js');
console.log('Curso progresiveWEBAPPS');
console.log('Curso Flexbox');
console.log('Curso dieno y programacion web');
console.groupEnd();

console.groupCollapsed('Cursos de el jonas')
console.log('Curso JS');
console.log('Curso node.js');
console.log('Curso node.js');
console.log('Curso progresiveWEBAPPS');
console.log('Curso Flexbox');
console.log('Curso dieno y programacion web');
console.groupEnd();

console.log(console);
console.table(Object.entries(console).sort());


const numeros = [1,2,3,4,5],
      vocales = ['A', 'E', 'I', 'O', 'U'];

console.table(numeros);
console.table(vocales);

const perro = {
  nombre: 'Bonnie',
  raza: 'Boxer',
  color: 'Cafe',
}

console.table(perro);

console.time('Cuanto tiempo tarda mi codigo')
//Codigo a medir tiempo
console.timeEnd('Cuanto tiempo tarda mi codigo')


for (let i = 0; i < 100; i++) {
  console.count('codigo for');
  console.log(i);
}

let x = 1;
let y = 2;
let pruebaXY = 'Se espera que X siempre sea menor que Y';

//Solo se va a ejecutar cuando la peticion sea falsa
console.assert(x < y,{x,y,pruebaXY})


























