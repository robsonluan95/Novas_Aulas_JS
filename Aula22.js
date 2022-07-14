var jog;
var vel;
var direcaoX;
var direcaoY;
var posicaoX;
var posicaoY;
var anima;
var cont;
var inicia;
var parar;
var estado;

function inicia(){
    cont=0;
    vel=5;
    direcaoX=1;
    direcaoY=0; 
    posicaoX=0;
    posicaoY=0;
    estado=1;
    jog=document.getElementById("jogador");
    //addEventListener - >
    jog.addEventListener("click",function(){
        cancelAnimationFrame(anima);
    });
    document.getElementById("inciar").addEventListener("click",moverInicio);
   
    document.getElementById("parar").addEventListener("click",moverParar);
    game();
}
function moverInicio(){
    if (estado==0){
        estado=1;
        anima=requestAnimationFrame(game)
    }
}
function moverParar(){
    if (estado=1){
        estado=0;
        cancelAnimationFrame(anima)
        jog.style.backgroundColor="red"
    }else{
        estado=1;
        anima=resquestAnimationFrame(game)
    }
}

function game(){
    posicaoX=posicaoX+(direcaoX*vel);
    posicaoY+=(direcaoY*vel);
    jog.style.left=posicaoX+"px";
    jog.style.top=posicaoY+"px";
    anima=requestAnimationFrame(game)
    if (posicaoX==800){
        direcaoX=-1;
    }else if(posicaoX==0){
        direcaoX=1;
        direcaoY=1;
        cont+=50;
    }if (posicaoX==800){
        direcaoY=1;
        cont+=50;
    }if (posicaoY==cont){
        direcaoY=0;
    }
    console.log("posicao"+posicaoY," ",direcaoY)
    console.log(cont)
        
}
function parar(){

}
window.addEventListener("load",inicia);