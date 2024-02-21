class Propietario {
  constructor(nombre, direccion, telefono) {
    (this._nombre = nombre),
      (this._direccion = direccion),
      (this._telefono = telefono);
  }
  get nombre() {
    return this._nombre;
  }
  get direccion() {
    return this._direccion;
  }
  get telefono() {
    return this._telefono;
  }
  set nombre(nombre) {
    this._nombre = nombre;
  }
  set direccion(direccion) {
    this._direccion = direccion;
  }
  set telefono(telefono) {
    this._telefono = telefono;
  }

  get datosPropietario() {
    return (`* El nombre del dueno es: ${this._nombre}. El domicilio es : ${this._direccion}, y el numero telefonico de contacto es: ${this._telefono}`;
    }
    
}

class Animal extends Propietario {
  constructor(nombre, direccion, telefono, tipoMascota) {
    super(nombre, direccion, telefono);
    debugger;
    this._tipoMascota = tipoMascota;
  }
  get tipomascota() {
    return this._tipoMascota;
  }
  set tipomascota(tipomascota) {
    this._tipoMascota = tipoMascota;
  }
  get mostrarTipo() {
    return `El tipo de mascota es: ${this._tipoMascota}`;
    }
    
    getMostrarTipo() {
        return `El tipo de mascota es un: ${this._tipoMascota}`
    }
}

class Mascota extends Animal {
  constructor(
    nombre,
    direccion,
    telefono,
    tipoMascota,
    nameMascota,
    enfermedad
  ) {
    super(nombre, direccion, telefono, tipoMascota);
    this._nameMascota = nameMascota;
  }
  get nameMascota() {
    return this._nameMascota;
  }
  set nameMascota(nameMacota) {
    this._nameMascota = nameMascota;
  }
  get enfermedad() {
    return this._enfermedad;
  }
  set enfermedad(enfermedad) {
    this._enfermedad = enfermedad;
    }
    
    get mostrarEnfermedad() {
        return (`El tipo de animal es un $UperCase() ${this._tipoMascota}, mientras que el nombre de la mascota es: ${this._nameMascota} y la enfermedad es: ${this._enfermedad}`)
    }
}
export { Mascota, Animal, Propietario };
