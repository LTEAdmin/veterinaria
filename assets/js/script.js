import { Mascota, Animal, Propietario } from "../Modulos/clases.js";

const tipoMascota = ["Perro", "Gato", "Conejo"];

/* let formulario = document.querySelector("formulario"); */
function leerFormulario() {
  let nombre = document.getElementId("propietario").value;
  
}



formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  leerFormulario();

  console.log(Mascota);
  /* clases.Mascota.enfermedad = enfermedad.value;
    clases.Mascota.tipomascota = tipoMascota.value; */
  /* clases.Mascota.telefono = telefono.value;
    clases.Mascota.direccion = direccion.value;
    clases.Mascota.nombre = nombre.value; */
  console.log(clases.Mascota);
});
