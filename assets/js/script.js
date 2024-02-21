import { Mascota, Animal, Propietario } from "../Modulos/clases.js";

function guardarMascota(
  nombre,
  direccion,
  telefono,
  tipo,
  nombreMascota,
  enfermedad
) {
  switch (tipo) {
    case "perro":
      let perro = new Mascota(
        nombre,
        direccion,
        telefono,
        tipo,
        nombreMascota,
        enfermedad
      );
      break;
    case "gato":
      let gato = new Mascota(
        nombre,
        direccion,
        telefono,
        tipo,
        nombreMascota,
        enfermedad
      );
      break;
    case "conejo":
      let conejo = new Mascota(
        nombre,
        direccion,
        telefono,
        tipo,
        nombreMascota,
        enfermedad
      );
      break;
    default:
      alert(` El tipo de mascota ${tipo} no se permite `);
      break;
  }
  construirRespuesta();
}
function validarFormulario(
  nombre,
  direccion,
  telefono,
  nombreMascota,
  enfermedad,
  tipo
) {
  let errores = [];
  if (nombre == "" || nombre == " " || nombre == null) {
    errores.push("El nombre es obligatorio.  \n ");
  }
  if (direccion == "" || direccion == " " || direccion == null) {
    errores.push("La direccion es obligatoria. \n ");
  }
  if (telefono == "" || telefono == " " || telefono == null) {
    errores.push("El telefono es obligatorio. \n");
  }
  if (nombreMascota == "" || nombreMascota == " " || nombreMascota == null) {
    errores.push("El nombre de la mascota es obligatorio \n");
  }
  if (enfermedad == "" || enfermedad == " " || enfermedad == null) {
    errores.push("La enfermedad es obligatoria\n");
  }
    if (tipo == "" || tipo == " " || tipo == null) {
    errores.push("El tipo de mascota es obligatorio\n");
  }
    if ((errores.length) > 0) {
        let mensaje = "";
      for (let i = 0; i < errores.length; i++) {
         mensaje=mensaje + (errores[i]);
        }
        alert (mensaje);
  } else {
    guardarMascota(
      nombre,
      direccion,
      telefono,
      tipo,
      nombreMascota,
      enfermedad
    );
  }
}

function leerFormulario() {
    let nombre = document.getElementById("propietario").value;
    let direccion = document.getElementById("direccion").value;
    let telefono = document.getElementById("telefono").value;
    let nombreMascota = document.getElementById("nombreMascota").value;
    let enfermedad = document.getElementById("enfermedad").value;
    let tipo = document.getElementById("tipo").value;
    validarFormulario(nombre, direccion, telefono, nombreMascota, enfermedad, tipo);
}



function construirRespuesta() {
    let mensaje = (`${Propietario.datosPropietario} <br>${Mascota.mostrarEnfermedad}`);
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = mensaje;
   formulario.reset();
}

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
  leerFormulario();
});
