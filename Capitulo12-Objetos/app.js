let a = new String('hola');
console.log(a);

const b = {

}

console.log(b);


/*dentro de un objeto a las variables se le van a llamar atributos
/propiedades y a las funciones se les llama metodos*/

const cam = {
  nombre: 'camilo',
  apellido: 'huertas',
  edad: 13,
  pasatiempos: ['Ejercicio','Futbol'],
  soltero: true,
  contacto: {
    email: 'camiloandreshuertas26@gmail.com',
    twitter: 'no hay',
    movil: '34353634634',
  },
  saludar: function (){
    console.log('hola');
  },
  decirMiNombre: function (){
    console.log(`hola me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} años.`)
  }
}

console.log(cam);
console.log(cam['nombre']);
console.log(cam['apellido']);
console.log(cam.edad);
console.log(cam.apellido);
console.log(cam.nombre);
console.log(cam.soltero);
console.log(cam.contacto.email);
console.log(cam.contacto.twitter);
console.log(cam.contacto.movil);
cam.saludar();
cam.decirMiNombre();

//Metodos para objetos
console.log(Object.keys(cam));//keys me lista los atributos del objeto
console.log(Object.keys(cam));//keys me lista los atributos del objeto
console.log(Object.values(cam));//values muestra el valor de los atributos
console.log(cam.hasOwnProperty('nombre'));
//hasOwnProperty sirve para mostrar si el objeto tiene cierto nombre de artibuto
console.log(cam.hasOwnProperty('nacimiento'));




