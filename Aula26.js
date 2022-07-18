
var imgs=[];
var slider;
var imgAtual;
var maxImg;

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
    preCarregamento();
    imgAtual=1;
    maxImg=imgs.length;
    slider=document.getElementById("dvslider");
    carregarImg(imgAtual);
}


//função para trocar as imagens
setInterval(troca,2000)
function troca(){
    imgAtual++;
    if (imgAtual>maxImg){
        imgAtual=0;
    }
    carregarImg(imgAtual);
}


window.addEventListener("load",Inicia)