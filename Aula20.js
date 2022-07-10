//setTimeout(callBack,time)-Ele faz o chamdo da função uma vez 

var arco;
function corAleatotia(){
    var obj=document.getElementById("div1");
    
    //CRIAR VARIAVEIS PARA QUE OS DADOS SEJAM RANDOMICOS
    var r=Math.floor(Math.random()*255);
    var g=Math.floor(Math.random()*255);
    var b=Math.floor(Math.random()*255);
    //REVEBENDO AS VARIAVEIS DE PARA NUM ALEATORIO
    obj.style.backgroundColor="rgb("+r+","+g+","+b+")";
}
//PUXANDO A FUNÇÃO

function ativarclick(){
    var obj1=document.getElementById("bt1");
    obj1.addEventListener("click",ativarSet);

    //USANDO PARA PARA O BOTAO

    var obj2=document.getElementById("bt2");
    //NO LUGAR DE REMOVER FOI ATIVADO 
    obj2.addEventListener("click",desativar);
}
function ativarSet(){
    arco=setInterval(corAleatotia,150)

}
function desativar(){
    clearInterval(arco);
}
// setInterval(corAleatotia,1000)
window.addEventListener("load",ativarclick)