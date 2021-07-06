let nombre = 'Camilo';
let apellido = 'Huertas';


//Concatenacion
let saludo = 'Hola mi nombre es ' + nombre + '' + apellido + '.';
console.log(saludo);

//Interpolacion de variables
//Template string

let saludo2 = `Hola mi nombre es ${nombre} ${apellido}.`
console.log(saludo2);

let ul = '  <ul><li>Primavera</li><li>Verano</li><li>otono</li><li>Invierno</li></ul>'
console.log(ul);

let ul2 = `  <ul>
<li>Primavera</li>
<li>Verano</li>
<li>otono</li>
<li>Invierno</li>
</ul>
`

console.log(ul2);

let ul3 = '<ul>'
ul3 += '<li>Verano</li>';
ul3 += '<li>otono</li>';
ul3 += '<li>Invierno</li>';
ul3 += '</ul>';

//Hay varias formas de concadenar