const a =[];
const b =[1, true, 'hola', ['A', 'B', 'C',[1,2,3]]];
console.log(a);
console.log(b.length);
console.log(b[0]);
console.log(b[3]);
console.log(b[3][2]);
console.log(b[3][3][0]);

//Nuevo metodo de declaracion de arrays
//el metodo of es para decirle que debe contener el array
const c = Array.of('x', 'y','z', 9, 8, 7)
console.log(c);

//Otra manera de declarar arrays
//fill es un metodo para rellenar posiciones con un mismo valor
const d = Array(100).fill(false);
console.log(d);

//Formas antiguas
const e = new Array();
console.log(e);

const f = new Array(1,2,3,false,true)
console.log(f);

const colores = ['rojo', 'verde', 'azul']
console.log(colores);

colores.push('negro')//Push añade valores
console.log(colores);

colores.pop();//pop quita el ultimo valor
console.log(colores);

colores.forEach(function (el, index) {
  console.log(`<li id=${index}>${el}</li>`);
});








