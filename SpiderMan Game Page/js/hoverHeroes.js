"use strict";

document.addEventListener('DOMContentLoaded', function () {

    document.querySelector(".spider-gwen-stacy").addEventListener("mouseover", fondoGwen);
    document.querySelector(".spider-gwen-stacy").addEventListener("mouseout", fondoGwenOut);
    document.querySelector(".spider-peter-parker").addEventListener("mouseover", fondoPeter);
    document.querySelector(".spider-peter-parker").addEventListener("mouseout", fondoPeterOut);
    document.querySelector(".spider-miles-morales").addEventListener("mouseover", fondoMiles);
    document.querySelector(".spider-miles-morales").addEventListener("mouseout", fondoMilesOut);
    let fondo = document.querySelector(".rectangle-10");
    let top = document.querySelector(".lineTop");
    let bottom = document.querySelector(".lineBottom");
    let gwen = document.querySelector(".spider-gwen-stacy");
    let peter = document.querySelector(".spider-peter-parker");
    let miles = document.querySelector(".spider-miles-morales");

    let divOculto = document.querySelector(".oculto");

//Cuando pasas el mouse encima de uno de los 3 heroes cambia el fondo y las imagenes de los personajes
    function fondoGwen() {
        divOculto.classList.add("fondoGwen");
        fondo.classList.add("rectangleGwen");
        top.classList.add("lineTopGwen");
        bottom.classList.add("lineBottomGwen");
        gwen.classList.add("spider-gwen-stacy-giant");
        peter.classList.add("spider-peter-parker-blur");
        miles.classList.add("spider-miles-morales-blur-1");
        // prefooter.style.bottom= 3266.779+ "px";

        // fondo.style.backgroundImage="url(../images/RectangleGwen.png)";
    }
//cuando el mouse ya no esta aputando a uno de los personajes vuelve a como estaba antes
    function fondoGwenOut() {
        divOculto.classList.remove("fondoGwen");
        fondo.classList.remove("rectangleGwen");
        top.classList.remove("lineTopGwen");
        bottom.classList.remove("lineBottomGwen");
        gwen.classList.remove("spider-gwen-stacy-giant");
        peter.classList.remove("spider-peter-parker-blur");
        miles.classList.remove("spider-miles-morales-blur-1");
        // prefooter.style.bottom= 3145+ "px";


    }

    function fondoPeter() {
        divOculto.classList.add("fondoPeter");
        fondo.classList.add("rectanglePeter");
        top.classList.add("lineTopPeter");
        bottom.classList.add("lineBottomPeter");
        peter.classList.add("spider-peter-parker-giant");
        gwen.classList.add("spider-gwen-stacy-blur");
        miles.classList.add("spider-miles-morales-blur-2");
        // prefooter.style.bottom= 3246.779+ "px";
    }

    function fondoPeterOut() {
        divOculto.classList.remove("fondoPeter");
        fondo.classList.remove("rectanglePeter");
        top.classList.remove("lineTopPeter");
        bottom.classList.remove("lineBottomPeter");
        peter.classList.remove("spider-peter-parker-giant");
        gwen.classList.remove("spider-gwen-stacy-blur");
        miles.classList.remove("spider-miles-morales-blur-2");
        // prefooter.style.bottom= 3145+ "px";
    }

    function fondoMiles() {
        divOculto.classList.add("fondoMiles");
        fondo.classList.add("rectangleMiles");
        top.classList.add("lineTopMiles");
        bottom.classList.add("lineBottomMiles");
        peter.classList.add("spider-peter-parker-blur-2");
        gwen.classList.add("spider-gwen-stacy-blur-2");
        miles.classList.add("spider-miles-morales-giant");
        // prefooter.style.bottom= 3226.779+ "px";
    }

    function fondoMilesOut() {
        divOculto.classList.remove("fondoMiles");
        fondo.classList.remove("rectangleMiles");
        top.classList.remove("lineTopMiles");
        bottom.classList.remove("lineBottomMiles");
        peter.classList.remove("spider-peter-parker-blur-2");
        gwen.classList.remove("spider-gwen-stacy-blur-2");
        miles.classList.remove("spider-miles-morales-giant");
        // prefooter.style.bottom= 3145+ "px";
    }




});