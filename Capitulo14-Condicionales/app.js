//If - else
let edad = 17;
if (edad > 17) {
  console.log("eres mayor de edad");
} else {
  console.log("eres menor de edad");
}

if (edad >= 18) {
  console.log("eres mayor de edad");
} else {
  console.log("eres menor de edad");
}

let hora = 1;
if (hora >= 0 && hora <= 5) {
  console.log("Dejame Dormir");
} else if (hora >= 6 && hora <= 11) {
  console.log("Buenos Dias");
} else if (hora >= 12 && hora <= 18) {
  console.log("Buenas tares");
} else {
  console.log("Buenas Noches");
}

//Operador Ternario(condicion)?verdadero : falsa
console.log("Operador ternario");
let eresMayor = edad >= 18 ? "Eres mayor de edad" : "eres menor de edad";
console.log(eresMayor);

//switch-case
/* 
Domingo 0
Lunes - 1
Martes - 2
Miercoles - 3
Jueves - 4
Viernes - 5
Sabado - 6
*/

let dia = 2;

switch (dia) {
  case 0:
    console.log("Domingo");
    break;
  case 1:
    console.log('Lunes');
    break;

  case 2:
    console.log('Martes');
    break;

  case 3:
    console.log('Miercoles');
    break;

  case 4:
    console.log('Jueves');
    break;

  case 5:
    console.log('Viernes');
    break;

  case 6:
    console.log('Sabado');
    break;

  default:
    console.log('El dia no existe');
    break;
}
