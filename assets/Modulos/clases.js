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
    return `${this._nombre}, ${this._direccion}, ${this._telefono}`;
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
}

class Mascota extends Animal {
  constructor(nombre, direccion, telefono, tipoMascota, nameMascota) {
    super(nombre, direccion, telefono, tipoMascota);
    this._nameMascota = nameMascota;
  }
  get nameMascota() {
    return this._nameMascota;
  }
  set nameMascota(nameMacota) {
    this._nameMascota = nameMascota;
  }
}
export { Mascota, Animal, Propietario };