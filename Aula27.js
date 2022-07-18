
var imgs=[];
var slider;
var imgAtual;
var maxImg;
var tempoTroca;
var verTempo;
var verLoad;

//FUNÇAO PARA DECLARAR QUAL NOME DA IMAGEM E ONDE BUSCAR

function preCarregamento(){

    var s=1;
    for (var i=0;i<3;i++){
        imgs[i]=new Image();
        imgs[i].src="/imgs/s"+s+".jpeg"
        s++;
    }
    
}

//Funçao criada apenas para estilizar toda vez que a imagem mudar o valor recebido
function carregarImg(img){
    slider.style.backgroundImage="url('"+imgs[img].src+"')";

}
function Inicia(){
    verLoad=document.getElementById("dvBarra")
    preCarregamento();
    imgAtual=0;
    maxImg=imgs.length-1;
    slider=document.getElementById("dvslider");
    carregarImg(imgAtual);
    tempoTroca=0;
    anima();
}

function anima(){
    tempoTroca++;
    if (tempoTroca>=500){
        tempoTroca=0;
        troca(1);
    }
    verTempo=(tempoTroca/5)
    verLoad.style.width=verTempo+"%"
    window.requestAnimationFrame(anima);

}

//função para trocar as imagens
function troca(dir){
    tempoTroca=0;
    imgAtual+=dir;
    if (imgAtual>maxImg){
        imgAtual=0;
    }else if (imgAtual<0){
        imgAtual=maxImg
    }
    carregarImg(imgAtual);
}


window.addEventListener("load",Inicia)