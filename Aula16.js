// Escopo de onde uma Variavel pode chegar


//Dentro de uma funçao ou um obj so é encontrada caso voce
//declare novamente ela , pois sao locais diferentes na memoria


var carro='gol'
var moto='1100'
function meuCarro(){
    var carro='Pulse';
    moto='1500'
    document.write(" Carro e Moto da Funçao: ",carro,",",moto)
}
meuCarro();
document.write("<br> Carro VAR GLOBAL: ",carro,",",moto)