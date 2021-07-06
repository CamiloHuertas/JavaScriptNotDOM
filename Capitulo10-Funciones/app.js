//Hay 2 maneras de declarar funciones - las declaradas y las expresadas
//Una funcion puede devolver cualquier tipo de dato, sea primitivo o
//compuesto



//Funcion declarada
//esta no recibe parametros ni retorna valores
function estoEsUnaFuncion () {
  console.log('Uno');
  console.log('Dos');
  console.log('Tres');
}
//Invocacion de funcion
estoEsUnaFuncion();
estoEsUnaFuncion();
estoEsUnaFuncion();

console.log('*****************FuncionReturn*****************');

//Funcion que devuelve valor
function unaFuncionQueDevuelveValor () {
  console.log('Cuatro');
  return 19;
  console.log('Cinco');
  console.log('Seis');
  return 'La funcion ha retornado una cadena de texto';
}

let valorDeFuncion = unaFuncionQueDevuelveValor();

console.log(valorDeFuncion);

//Funcion que recibe parametros

function saludo (nombre = 'desconocido', edad = '0') {
  console.log(`Hola mi nombre es ${nombre} y tengo ${edad} años.` );
}

saludo('Camilo', 13);
saludo();

//Funciones declaradas VS funciones expresasdas

funcionDeclarada();


function funcionDeclarada () {
  console.log(`Esto es una funcion declarada,puede invocarse en cualquier parte de nuestro codigo, incluso antes de que la funcion sea declarada`);
}

funcionDeclarada();

//Funcion anonima 

const funcionExpresada = function () {
  console.log('Esto es una funcion expresada, es decir, una funcion que se le ha sido asignado como valor a una variable, si invocamos esta funcion antes de su definicion JS nos dira error encontrado')
}

funcionExpresada();
funcionExpresada();