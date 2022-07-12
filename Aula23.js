var cont=0;
function atualizar(){
    var Data=new Date();
    var horas=Data.getHours();
    var minutos=Data.getMinutes();
    var segundos=Data.getSeconds();

    if (horas<10){
        horas="0"+horas;
    }if(minutos<10){
        minutos="0"+minutos;
    }if(segundos<10){
        segundos="0"+segundos;
    }

    var relo=(horas+":"+minutos+":"+segundos);
    document.getElementById("rel").innerHTML=relo
}

function trocaCor(){
    var backGroundCorEscura="#4C6476"
    var backGround2CorEscura="#384957"
    var fundoBt=document.getElementById("bt")
    var fundoPg=document.getElementById("container")
    var fundoRelo=document.getElementById("rel")
    
    cont+=1;
    
    if (cont%2==0){
        fundoPg.style.backgroundColor=backGround2CorEscura
        fundoRelo.style.backgroundColor=backGroundCorEscura
        fundoBt.style.backgroundColor=backGroundCorEscura 
    }else{
        fundoPg.style.backgroundColor=backGroundCorEscura
        fundoRelo.style.backgroundColor=backGround2CorEscura
        fundoBt.style.backgroundColor=backGround2CorEscura
    }
  
    console.log(cont)
}

document.getElementById("bt").addEventListener("click",trocaCor)
setInterval(atualizar,1);

