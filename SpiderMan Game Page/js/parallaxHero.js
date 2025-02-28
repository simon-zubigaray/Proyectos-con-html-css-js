"use strict";

document.addEventListener('DOMContentLoaded', function () {
    function castParallax() {
        var opThresh = 350;
        var opFactor = 750;
        window.addEventListener("scroll", function (event) {
            var top = this.scrollY;
            var layers = document.getElementsByClassName("parallaxHero");
            var layer, speed, yPos;
            for (var i = 0; i < layers.length; i++) {
                layer = layers[i];
                speed = layer.getAttribute('data-speed');
                var yPos = -(top * speed / 100);
                layer.setAttribute('style', 'transform: translate3d(0px, ' + yPos + 'px, 0px)');
            }
        });
    }

    document.body.onload = castParallax();

});