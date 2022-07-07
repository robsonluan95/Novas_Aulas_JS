var la =document.querySelectorAll(".envio");
for(var i=0;i<la.length;i++){
    la[i].value="novo"
}

// USANDO ESSE FORMS PARA BUSCAR O ID DO FORMULARIO
var el=document.forms[0].innerHTML;
document.write(el)

//USANDO OS ELESMENTS DO FORMULARIO

var ele = document.forms[0].elements[0].value;
document.write(ele)