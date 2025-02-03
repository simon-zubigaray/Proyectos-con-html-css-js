"use strict";

// Obtener el formulario y agregar un evento de clic al botón
document.querySelector("#btn-inicio-sesion").addEventListener("click", function (event) {
    // Prevenir el envío del formulario por defecto
    event.preventDefault();
    document.querySelector(".registroOculto").classList.toggle("registroVisible");

    setTimeout(function () {
        // Redirigir a la URL deseada
        window.location.href = "index.html";
    }, 1000);
});