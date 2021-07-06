try {
  console.log('En el try se agrega el codigo a evaluar');
} catch (error) {
  console.log('Catch captura cualquier error surgido o lanzado en el try');
} finally {
  console.log('El bloque finally se ejecutara siempre al final de un bloque try catch');
}

console.log('************************');

try {
  console.log('En el try se agrega el codigo a evaluar');
  NoExiste;
} catch (error) {
  console.log('Catch captura cualquier error surgido o lanzado en el try');
} finally {
  console.log('El bloque finally se ejecutara siempre al final de un bloque try catch');
}

try {
  let numero ='y';
  if (isNaN(numero)) {
    throw new Error('El caracter introducido no es un numero')
  }else{
    console.log(numero * numero);
  }
} catch (error) {
  console.log(`Se produjo el siguiente error: ${error}`);
}




