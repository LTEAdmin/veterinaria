import { Mascota, Animal, Propietario } from "../Modulos/clases.js";

const tipoMascota = ["Perro", "Gato", "Conejo"];

/* let formulario = document.querySelector("formulario"); */
function leerFormulario() {
  const nombre = document.getElementById("propietario").value;
  console.log(nombre)
}



formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  leerFormulario();

  console.log(Mascota);
  
  
});
