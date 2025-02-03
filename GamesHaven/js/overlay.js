"use strict";

document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    document.querySelector('.overlay').style.opacity = 0;
  }, 5000);
  setTimeout(function () {
    document.querySelector('.overlay').remove();
  }, 10000);

  const percentage = document.getElementById('percentage');

  let currentPercentage = 0;

  function increasePercentage() {
    if (currentPercentage < 100) {
      currentPercentage += 1;
      updatePercentage();
      setTimeout(increasePercentage, 40); // Puedes ajustar la velocidad de carga aquí
    }
  }

  function updatePercentage() {
    percentage.textContent = `${currentPercentage}%`;
  }

  increasePercentage(); // Inicia el proceso de aumento del porcentaje
});