let botones = document.querySelectorAll('.btn-num');
let btnCalcular = document.querySelector('.btn-calc');
let btnReiniciar = document.querySelector('.btn-rein');

//Agrega los valores a la pantalla
function agregar(valor) {
  document.querySelector('#pantalla').value += valor;
}

//Borra todos los numeros o signos de la pantalla
function borrar() {
  document.querySelector('#pantalla').value = '';
}

//Toma el valor de la pantalla y calcular el calculo
function calcular() {
  const valorPantalla = document.querySelector('#pantalla').value;
  const resultado = eval(valorPantalla);
  document.querySelector('#pantalla').value = resultado;
}

botones.forEach(boton => {
  boton.addEventListener('click', () => agregar(boton.value))
});

btnCalcular.addEventListener('click', () => calcular());
btnReiniciar.addEventListener('click', () => borrar());
