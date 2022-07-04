var nota=prompt('Nota do Aluno: ',)
var resultado;

if (nota>=60){
    resultado='Aprovado'

}else if (nota<60 && nota>=40){
    resultado='Recuperação'
}else{
    resultado='Reprovado'
}

document.write(resultado)
document.write('<br>')

//BLOCOS DE SWITCH
//forma correta de empregrar switch

var carro=4
var qualCarro;

switch(carro){
    case 1:
        qualCarro='UP-Tsi'
        break;
    case 2:
        qualCarro='Mobi'
        break;
    case 3:
        qualCarro='Argo'
        break;
    case 4:
        qualCarro='Pulse'
        break;
}
document.write(qualCarro)
document.write('<br>')



//Mas esse não é um bom exemplo de SWITCH CASE já que ele é melhor ultilizado quando temos acerteza 
//dos valores que serao empregados //NESTA FORMA MUITO MELHOR APLICAR COM IF
var valor =(nota, Number(nota))//TRANSFORMANDO VALOR DA VARIAVEL
var resultado2;

switch(valor){
    case 60:
        resultado2='aprovado 60';
        break;
    case 40:
        resultado2='Reporavado 40';
        break;

}
document.write(resultado2)

document.write('<br>')

//Forma mais adequada de fazer SWITCH a cima
var valor2,passou;
if (nota >=60){
    valor2=1;
}else if(nota>=40){
    valor2=26060
}else{
    valor2=3
}

switch(valor2){
    case 1:
        passou="SIM";
        break;
    case 2:
        passou="RECUPERAÇÃO";
        break;
    case 3:
        passou="NÃO"
        break;
}
document.write(passou)