 var tabela=document.getElementById("tabela");
 var nota;
 var t;
 var j;
 for (var i=1;i<tabela.rows.length;i++){
    nota=parseFloat(tabela.rows[i].cells[1].innerHTML)+parseFloat(tabela.rows[i].cells[2].innerHTML);
    t=parseFloat(tabela.rows[i].cells[3].innerHTML=nota/2)
}   

for (var i=1;i<tabela.rows.length;i++){
    j=document.getElementById(`n${i}`)
    t=j.innerHTML
    if (t>=50){j.style.color="GREEN"}
    else if (t<70){j.style.color="#f00"}

}

