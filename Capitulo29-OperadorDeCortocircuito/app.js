//Cortocircuito OR
/* 
Cuando el valor de la izquierda en la expresion siempre pueda validar a true, es el valor que se cargara por defecto
*/

//Cortocircuito AND
/* 
Cuando el valor de la izquierda en la expresion siempre pueda validar a false, es el valor que se cargara por defecto
*/

function saludar (nombre){
  nombre = nombre || 'Desconocido'
  console.log(`Hola ${nombre}`);
  //En este caso daria el valor de la izquierda ya que el de la izquierda es true, por lo que al otro lo ignora, si el de la izquierda llegara a ser false, se ejecutaria el de la derecha.
}

saludar('Camilo');
saludar();

//Cortocircuito or
console.log('Cadena' || 'Valor de la derecha' );
console.log( 19 || 'Valor de la derecha' );
console.log( true || 'Valor de la derecha' );
console.log( [] || 'Valor de la derecha' );
console.log( {} || 'Valor de la derecha' );
console.log( false || 'Valor de la derecha' );
console.log( null || 'Valor de la derecha' );
console.log( undefined || 'Valor de la derecha' );

//Cortocircuito AND
console.log( false && 'Valor de la derecha' );
console.log('Cadena' && 'Valor de la derecha' );
console.log( 19 && 'Valor de la derecha' );
console.log( true && 'Valor de la derecha' );
console.log( [] && 'Valor de la derecha' );
console.log( {} && 'Valor de la derecha' );
console.log( false && 'Valor de la derecha' );
console.log( null && 'Valor de la derecha' );
console.log( undefined && 'Valor de la derecha' );

































