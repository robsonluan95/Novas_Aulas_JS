var quadrado=document.getElementById("container")
var angulo=0;
var anime;
function rotat(){
    quadrado.style.transform="rotate("+angulo+"deg)";
    angulo++;
    if (angulo>360){
        angulo=0;
    }
    anime=requestAnimationFrame(rotat);
}

window.addEventListener("load",rotat)