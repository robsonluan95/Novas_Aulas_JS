var px=0,py=0;
var obj;

//PARA ATIVAR A FUNÇAO CLICK 
window.addEventListener("load",ativarclick);

function ativarclick (){
    obj=document.getElementById("dv1");
    obj.addEventListener("click",ativarMover)
}

function ativarMover(){
    document.addEventListener("keydown",mover)
}

function mover(){
    var obj=document.getElementById("dv1");
    var valorTecla=event.keyCode;
    if (valorTecla==37){
        px-=10;
        obj.style.left=px+"px"
    }else if(valorTecla==39){
        px+=10;
        obj.style.left=px+"px"
    }else if(valorTecla==38){
        py-=10;
        obj.style.top=py+"px"
    }else if(valorTecla==40){
        py+=10;
        obj.style.top=py+"px"
    }else if (valorTecla=13){
        document.removeEventListener("keydown",mover) 
            
    }

}
    