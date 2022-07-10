var px=0,py=0;
function ativarMover (){
    var obj =document.getElementById("dv1");
    document.addEventListener("keydown",mover)
    
}

function mover(){
    var obj=document.getElementById("dv1");
    var valorTecla=event.keyCode;
    if (obj=document.addEventListener("click")){
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
}
    

document.addEventListener("keydown",mover)

g