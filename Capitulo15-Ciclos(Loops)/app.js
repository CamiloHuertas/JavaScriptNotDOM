let contador = 0;

//Hay que tener precaucion con no poner ciclos infinitos, puede petar el navegador
//Ciclo while
while (contador < 10){
  console.log('while' + contador);
  contador++
}


//Do while
do {
  console.log('do while ' + contador);
  contador++
} while(contador < 10);


console.log('ciclo for*****************');
//Ciclo for
// for(Inizializacion de variable; condicion; incremento o decremento){
//   codigo que ejecuta el for
// }

for (let i = 0; i <10; i++){
    console.log('for ' + i);
}

let numeros = [10,20,30,40,50,60,70,80,90];

for (let e = 0; e < numeros.length; e++) {
  console.log(numeros[e]);
}

const cam = {
  nombre: 'Camilo',
  apellido: 'Huertas',
  edad: 13,
}


for (const propiedad in cam) {
  console.log(propiedad);
}

//Ciclo Forin
//Aqui dara valores undefined, el punto no funciona aqui
for (const propiedad in cam) {
  console.log(`Key: ${propiedad} ${cam.propiedad}`);
}

//Para que muestre valores hay que usar los corchetes cuadrados
for (const propiedad in cam) {
  console.log(`Key: ${propiedad} ${cam[propiedad]}`);
}

//Ciclo Forof


for (const elemento of numeros) {
  console.log(elemento);
}


let cadena = 'Hola mundo';

for (const caracter of cadena) {
  console.log(caracter);
}