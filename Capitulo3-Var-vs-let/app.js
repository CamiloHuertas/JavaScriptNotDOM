
var hola = ' hola mundo';
let hello = 'Hello world';
console.log(hola);
console.log(hello);
console.log(window);
console.log(window.hola);
console.log(window.hello);
//Ambito de bloques
//No usar var, es una mala practica
console.log('**********************Var*************************');

var musica = 'rock';
console.log('variable musica antes del bloque', musica);
//esto es un bloque - comentario de una linea
/* comentarios de varias lineas como en CSS*/ 
{
  var musica = 'pop';
  console.log('variable musica dentro del bloque', musica);
}
  console.log('variable musica despues del bloque', musica);
  
console.log('**********************Let*************************');

  let musica2 = 'rock';
  console.log('variable musica antes del bloque', musica2);
  //esto es un bloque - comentario de una linea
  /* comentarios de varias lineas como en CSS*/ 
  {
    let musica2 = 'pop';
    console.log('variable musica dentro del bloque', musica2);
  }
    console.log('variable musica despues del bloque', musica2);
