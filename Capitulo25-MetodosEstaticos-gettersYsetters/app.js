//Un metodo estatico se puede ejecutar sin necesidad de instanciar la clase

class Animal {
  constructor(nombre, genero) {
    this.nombre = nombre
    this.genero = genero
  }
  //Esto si se podra ejecutar ya que es estatica
  static queEres() {
    console.log("Los perros estamos mamadisimos")
  }
}

class Perro extends Animal {
  constructor(nombre, genero, tamanio) {
    super(nombre, genero)
    this.tamanio = tamanio
    this.raza = null
  }
  //Metodo obtenedor
  get getRaza() {
    return this.raza
  }

  //Metodo establecedor
  set setRaza(raza) {
    this.raza = raza
  }
}

const scooby = new Perro("Scooby", "Macho", "Gigante")
const mitch = new Animal("mitch", "macho")
scooby.setRaza = "Gran danes"

console.log(mitch)
console.log(scooby)
console.log(scooby.getRaza)

//Los setters y getters son metodos especiales que nos permiten establecer y obtener los valores de atributo de nuestra clase

Animal.queEres()
