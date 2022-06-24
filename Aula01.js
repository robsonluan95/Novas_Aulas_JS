
document.write("Aula 01 de JavaScript <br>" );
document.write("======================================<br>")




//VARIAVEIS

let canal;
let nome;
let site;

//MODO DE DECLARAÇAO MULTIPLAS

let canal1,nome1,site1;

//Escrevendo o a variavel pelo nome
document.write("Escrevendo o a variavel pelo nome");
document.write("<br>");

document.write(canal)
document.write("<br>");

canal='2017';
document.write(canal)
document.write("======================================<br>")


//Aula de Constante
//A constante não pode Ser alterada!!

const aula='Aula 01 - const';

var aula2='Aula 01 - var';

document.write(aula)
document.write('<br>')
document.write(aula2)

//    aula='aula erro'     //ISSO AQUI GERA UM ERRO POIS O CONST NAO PODE SER ALTERADO
aula2='aqui da certo'// COMO ESSE FOI DECLARADO COM VAR ELE PODE SER ALTERADO

document.write(aula)
document.write('<br>')
document.write(aula2)


//Aula sobre Alert
const aulaAlert='aula sobre alert'
const aulaAlert2=04
alert( aulaAlert +" "+ aulaAlert2);
document.write("<br>======================================<br>")


//Aula de PROMPT


var nomeUser=prompt('Digite seu nome','')
document.write('Valor digitado pelo usuario '+nomeUser)

document.write("<br>======================================<br>")

//AULA DE CONFIRM
//Sobre o confirm ele manda uma alert para o usuario e nele é recebido o value de true ou false
//dependendo se o usuario confirmou ou cancelou

var resultado =confirm(`Seu nome é ${nomeUser}?`)

document.write(resultado)