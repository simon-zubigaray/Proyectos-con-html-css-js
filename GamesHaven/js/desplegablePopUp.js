"use strict";
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".btn-compartir").addEventListener("click", desplegablePopUp);
    document.querySelector(".btnCerrar").addEventListener("click", desplegablePopUp);

    function desplegablePopUp() {
        let popUp = document.querySelector(".popUp");
        popUp.classList.toggle("mostrarDivOculto");
    };


});