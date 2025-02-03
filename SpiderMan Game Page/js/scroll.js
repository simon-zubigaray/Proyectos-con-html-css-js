"use strict";

document.addEventListener('DOMContentLoaded', function () {
    function getDocumentOffsetTop(element) {
        var offsetTop = 0;
        while (element) {
            offsetTop += element.offsetTop;
            element = element.offsetParent;
        }
        return offsetTop;
    }
//punto 4 este es para que cuando scrolleas cambie de imagen y texto cuando estas cerca de la imagen que lo sigue. 
    window.addEventListener('scroll', function () {
        let scrollPosition = window.scrollY+290;
        let img1 = document.querySelector('.img-juego-1');
        let info1 = document.querySelector('.info-img-1');
        let img2 = document.querySelector('.img-juego-2');
        let info2 = document.querySelector('.info-img-2');
        let img3 = document.querySelector(".img-juego-3");
        let info3 = document.querySelector('.info-img-3');
        let img4 = document.querySelector(".img-juego-4");
        let info4 = document.querySelector('.info-img-4');

        if (scrollPosition >= getDocumentOffsetTop(img1) && scrollPosition < getDocumentOffsetTop(img2)) {
            img1.classList.add('active');
            info1.classList.add('active');
            img2.classList.remove('active');
            info2.classList.remove('active');
            img3.classList.remove('active');
            info3.classList.remove('active');
            img4.classList.remove('active');
            info4.classList.remove('active');
        } else if (scrollPosition >= getDocumentOffsetTop(img2) && scrollPosition < getDocumentOffsetTop(img3)) {
            img2.classList.add('active');
            info2.classList.add('active');
            img1.classList.remove('active');
            info1.classList.remove('active');
            img3.classList.remove('active');
            info3.classList.remove('active');
            img4.classList.remove('active');
            info4.classList.remove('active');
        } else if (scrollPosition >= getDocumentOffsetTop(img3) && scrollPosition < getDocumentOffsetTop(img4)) {
            img3.classList.add('active');
            info3.classList.add('active');
            img1.classList.remove('active');
            info1.classList.remove('active');
            img2.classList.remove('active');
            info2.classList.remove('active');
            img4.classList.remove('active');
            info4.classList.remove('active');
        } else if (scrollPosition >= getDocumentOffsetTop(img4)) {
            img4.classList.add('active');
            info4.classList.add('active');
            img1.classList.remove('active');
            info1.classList.remove('active');
            img2.classList.remove('active');
            info2.classList.remove('active');
            img3.classList.remove('active');
            info3.classList.remove('active');
        }
    });

});