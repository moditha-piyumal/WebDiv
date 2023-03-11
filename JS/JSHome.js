var menubutton = document.querySelector("button");
var menu = document.querySelector(".menu");

menubutton.addEventListener('click', () => {
    menu.classList.toggle('active');
    menubutton.classList.toggle('redbutton');
    // console.log("X");
});