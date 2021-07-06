class Animal {
  //El constructor es un metodo especial que se ejecuta en el momento de instanciar la clase
  constructor(nombre, genero) {
    //Atributos
    this.nombre = nombre
    this.genero = genero
  }

  //Metodos
  sonar() {
    console.log(`Hago sonidos porque estoy vivo`)
  }
  saludar() {
    console.log(`Hola me llamo ${this.nombre}`)
  }
}
//Herencia con clases
class Perro extends Animal {
  constructor(nombre, genero, tamanio) {
    //Con el metodo super() se manda a llamar el constructor de la clase padre
    super(nombre, genero)
    this.tamanio = tamanio
  }

  sonar() {
    console.log("Soy un perro y mi sonido es un ladrido")
  }

  ladrar() {
    console.log("Guau guau")
  }
}

const Mimi = new Animal("Mimi", "Hembra")
Scooby = new Perro("Scooby", "Macho", "Gigante")

console.log(Mimi, Scooby)
Mimi.saludar()
Mimi.sonar()

Scooby.saludar()
Scooby.sonar()
Scooby.ladrar()
