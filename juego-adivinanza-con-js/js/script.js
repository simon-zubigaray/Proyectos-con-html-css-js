//El juego selecciona un numero al azar
let numeroAzar = Math.floor(Math.random() * 100 + 1);

//Selecciono el boton Comprobar
let btnResultado = document.querySelector('.btn-comprobar');

//Selecciono el boton reiniciar
let btnReiniciar = document.querySelector('.btn-reiniciar');

//Selecciono la casilla que almacena el numero ingresado por el usuario
let contenedorNumero = document.querySelector('.contenedor-numero');

//Selecciono el parrafo que inicialmente esta vacio
let mensaje = document.querySelector('.mensaje');

//Selecciono el parrafo que inicialmente esta vacio
let intento = document.querySelector('.intento');
let intentos = 0;

btnResultado.addEventListener('click', function () {

  let numeroEntrada = parseInt(contenedorNumero.value);

  if (numeroEntrada < 1 || numeroEntrada > 100 || isNaN(numeroEntrada)) {
    mensaje.textContent = "Ingrese un valor valido entre 1 y 100 por favor!!";
    mensaje.style.color = "red";
    return
  }

  intentos++;
  intento.textContent = 'Numero de intentos: ' + intentos;

  if (numeroEntrada < numeroAzar) {
    mensaje.textContent = "El numero que ingresaste es mas chico que el numero a adivinar!";
    mensaje.style.color = "blue";
  }
  else if (numeroEntrada > numeroAzar) {
    mensaje.textContent = "El numero que ingresaste es mas grande que el numero a adivinar!";
    mensaje.style.color = "orange";
  }

  else if (numeroEntrada === numeroAzar) {
    mensaje.textContent = "Felicitaciones! Acertaste el numero!!!";
    mensaje.style.color = "green";
    contenedorNumero.disabled = true;
  }

})

btnReiniciar.addEventListener('click', function () {
  numeroAzar = Math.floor(Math.random() * 100 + 1);
  contenedorNumero.value = '';
  mensaje.textContent = '';
  intentos = 0;
  intento.textContent = '';
  contenedorNumero.disabled = false;
})