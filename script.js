const height = document.getElementById("height");
const width = document.getElementById("width");

height.innerText = window.innerHeight;
width.innerText = window.innerWidth;

window.addEventListener("resize", function () {
    height.innerText = window.innerHeight;
    width.innerText = window.innerWidth;
});