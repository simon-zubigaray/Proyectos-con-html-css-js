"use strict";
document.addEventListener("DOMContentLoaded", function () {
    let btn = document.querySelectorAll(".btnCarrito");
    for(let i=0;i<btn.length;i++){
        btn[i].addEventListener("click",agregar);
        btn[i].dataset.index = i;

    }
    let estadoCarrito = document.querySelectorAll(".agregadoCarritoOculto");

    for(let i=0;i<estadoCarrito.length;i++){
        estadoCarrito[i].dataset.index = i;
    }


    function agregar(){
        let pos = this.dataset.index;
        btn[pos].classList.toggle("sacar");
        console.log(pos);
        console.log(btn[pos]);
        console.log(estadoCarrito[pos]);
        estadoCarrito[pos].classList.remove("agregadoCarritoOculto")
        estadoCarrito[pos].classList.toggle("agregadoCarritoVisible");

    }


});