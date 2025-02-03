window.addEventListener("scroll", function () {
    var header = document.querySelector(".div-header");
    var iconoSpidey = document.querySelector(".div1");
    header.classList.toggle("abajo", window.scrollY > 0);
    iconoSpidey.classList.toggle("abajo", window.scrollY > 0);
})