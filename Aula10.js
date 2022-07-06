// GetElementById

/*
    Manipulando elementos com GetElementByI
    o getElementById é case sensitive
*/

document.getElementById("texto").style.color="#f00";


/*
Podemos alterar valores usando o getElementById de outras formas
simplismente jogando ele para uma variavel. DESSA FORMA
*/

var caixaHtml=document.getElementById("caixa");

caixaHtml.style.backgroundColor="black";
caixaHtml.style.width="300px";
caixaHtml.style.height="300px"
caixaHtml.style.marginBottom="10px"
// se eu quiser receber o value do  Html =>
var caixaHtmlT=document.getElementById("cxtexto").value; 
//Para conseguir copiar so pode ser o value , valor de indicação
document.write(caixaHtmlT)

//Para mudar o valor --> USANDO ESSE METODO CONSIGO ALTERAR O VALOR DO VALUE
var caixaHtmlT2=document.getElementById("cxtexto2").value="Novo valor"

//InnerHtml
// USANDO A INNERHTML PARA ALTERAR TUDO AQUILO QUE SEJA TEXTO DENTRO DE UM HTML
document.getElementById("texto").innerHTML="nova";



//GETELEMENTBYTAGNAME

//usando ele para mostar apenas o valor que quero e alterando ele

var Tagsh2=document.getElementsByTagName("h2");
Tagsh2[0].style.color="blue";

// usando uma forma de formatar todas as tags de uma unica vez
for (var i=0;i<Tagsh2.length;i++){
    Tagsh2[i].style.fontSize="14px";
}
//Dessa forma mandamos o for fazer uma varredura em todas as tags usando o valor do tamanho da 
//Variavel TagsH2 (usando o metodo length ) e ele vai incrementandop uma por uma ate todas ta feita

