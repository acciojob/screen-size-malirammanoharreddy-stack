//your JS code here. 
const height = document.getelementbyId("height")
const width = document.getelementbyId("width")
height.innerText =window.innerheight;
width.innerText =window.innerwidth;

window.addEventListener("resize", function(){
            height.innerText = window.innerHeight;
            width.innerText = window.innerWidth;
        })