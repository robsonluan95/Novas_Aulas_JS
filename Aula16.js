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

//Vemos aqui que a variavel Moto mudou Graças a Alteraçao da função 
//Mas so por conta que nao foi colocardo vcar na frente e mostrando que ele
//ta pegando o mesmo valor dentro do escopo

//CASO QUERIA MOSTRAR A VARIAVEL GLOBAL .this