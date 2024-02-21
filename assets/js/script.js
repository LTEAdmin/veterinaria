import { Mascota, Animal, Propietario } from "../Modulos/clases.js";

const tipoMascota = ["Perro", "Gato", "Conejo"];

/* let formulario = document.querySelector("formulario"); */
function leerFormulario() {
    let nombre = document.getElementById("propietario").value;
    let direccion = document.getElementById("direccion").value;
    let telefono = document.getElementById("telefono").value;
    let nombreMascota = document.getElementById("nombreMascota").value;
    let enfermedad = document.getElementById("enfermedad").value;
    let tipo = document.getElementById("tipo").value;
    validarFormulario();
}

function validarFormulario() {
    let errores = [];
    if (nombre =="" ||nombre==" " || nombre == null) {
        errores.push("El nombre es obligatorio");
    }
    if (direccion =="" ||direccion==" " || direccion == null) {
        errores.push("La direccion es obligatoria");
    }
    if (telefono =="" ||telefono==" " || telefono == null) {
        errores.push("El telefono es obligatorio");
    }
    if (nombreMascota =="" ||nombreMascota==" " || nombreMascota == null) {
        errores.push("El nombre de la mascota es obligatorio");
    }
    if (enfermedad =="" ||enfermedad==" " || enfermedad == null) {
        errores.push("La enfermedad es obligatoria");
    }
    if (tipo == "" || tipo == " " || tipo == null) {
    }
    if (errores.legth>0){
        alert(errores);
    }else{
        guardarMascota()
    }
}
 
function guardarMascota() {
    switch (tipo) {
        case "perro":
            let perro = new Mascota(
                nombre, direccion, telefono, tipoMascota, nombreMascota, enfermedad
            )
            break;
        case "gato":
            let gato = new Mascota(
                nombre, direccion, telefono, tipoMascota, nombreMascota, enfermedad
            )
            break;
        case "conejo":
            let conejo = new Mascota(
                nombre, direccion, telefono, tipoMascota, nombreMascota, enfermedad
            )
            break;
        default:
            alert(` El tipo de mascota ${tipo} no se permite `);
            break;
    }
}
formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  leerFormulario();
});
