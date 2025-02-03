import { barcelona, roma, paris, londres } from './ciudades.js';

//Obtener enlaces del DOM
let enlaces = document.querySelectorAll('a');
let tituloCiudad = document.querySelector('#titulo');
let subtituloCiudad = document.querySelector('#subtitulo');
let parrafoCiudad = document.querySelector('#parrafo');

let fondoCiudad = document.querySelector('#imagen');

//Agrego el evento click a cada enlace  
enlaces.forEach(function (enlace) {
  enlace.addEventListener('click', function () {

    //Remuevo la clase active de todos los enlaces
    enlaces.forEach(function (enlace) {
      enlace.classList.remove('active');
    });

    //Agregar clase active al enlace actual
    this.classList.add('active');

    //Obtener el contenido correspondiente segun el enlace
    let ciudadActiva = obtenerContenido(this.textContent);

    fondoCiudad.classList.remove('oculto');

    tituloCiudad.innerHTML = ciudadActiva.titulo;
    subtituloCiudad.innerHTML = ciudadActiva.subtitulo;
    parrafoCiudad.innerHTML = ciudadActiva.parrafo;
    fondoCiudad.src = ciudadActiva.fondo;
  });
});

//Obtengo el contenido de ciudades.js dependiendo de que enlace seleccione
function obtenerContenido(enlace) {
  let contenido = {
    'Barcelona': barcelona,
    'Roma': roma,
    'París': paris,
    'Londres': londres
  };
  return contenido[enlace];
}