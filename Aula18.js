function msg(){
    alert("CURSO")
}

// document.getElementById("dv1").addEventListener("click",msg); 

// FEITO PARA PUXAR O ID E NAO PRECISAR ESCREVER JS NO HTML
function addEventos(){
    document.getElementById("j").addEventListener("click",msg)
}
window.addEventListener("load",addEventos);
//O LOAD FOI UM EVENTO DA PAGINA


//FAZENDO UMA FUNÇÃO - COM MUITAS FUNCIONALIDADES

function cor(obj,cor){
    obj.style.backgroundColor=cor;
}

//Inicialização de eventos

function addEventos2(){
    var obj=document.getElementById("dv2");
    obj.addEventListener("click",msg);
    obj.addEventListener("mouseover",function(){
        cor(obj,"#f00")
    });
    obj.addEventListener("mouseout",function(){
        cor(obj,"#f45")
    })

}
window.addEventListener("load",addEventos2);