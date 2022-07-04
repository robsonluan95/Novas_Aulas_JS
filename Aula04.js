//Array é uma coleção de variaveis;

var cor1,cor2,cor3,cor4;
cor1='preto'
cor2='branco'
cor3='vermelho'
cor4='rosa'

//É a mesma coisa de :
var cor=['preto','branco','vermelho','rosa'];

var corArray=[];
var corArray2=new Array();


//Array metodo PUSH

//Array unidimensional, conhecido como vetor

/* Com METODO PUSH é possivel acrescentar valores   */

cor.push('roxo')

document.write(cor)

document.write("</br>")
var dias=[];

dias.push('segunda');
dias.push('terça');
dias.push('quarta');
dias.push('quinta');
dias.push('sexta');
dias.push('sabado');
dias.push('domingo');

document.write(dias)

document.write("</br>")

//COMO RETORNA UM INDECE DO ARRAY



document.write(dias[3]);
document.write("</br>")


document.write('--------------------------------------------------------',"</br></br>")


//fazendo uma mochila e acrescentando itens nela atravez do push

var itens=['facas','corda','lanterna','fosforo','celular'];

var mochila=[];
document.write('antes do incremento',"</br></br>")
document.write('Itens: ',itens,"</br>")
document.write('Mochila: ',mochila,"</br></br>")

document.write('apos o incremento',"</br></br>")

mochila.push(itens[2]);
document.write('Itens: ',itens,"</br>")
document.write('Mochila: ',mochila,"</br>")



document.write("</br>")
document.write('--------------------------------------------------------',"</br></br>")

//FAZENDO O INCREMTEMO DO ARRAY ATRAVEZ DE UNSHIFT::

var moto=[];

moto.push('pneu');
moto.push('motor');
moto.push('escape');
document.write('Variavel antes do incremtento : moto = ',moto);
document.write("</br>")
moto.unshift('gasolina')
document.write('Variavel apos o incremento: moto = ',moto)



document.write("</br>")
document.write('--------------------------------------------------------',"</br></br>")

//FAZERNDO DECREMENTO ULTILIZANDO O POP(); 

//Mesmo apos o incremento de gasolina feito no unshift o pop removeu o ultimo termo que nele
//foi o escape pois o unshift jogou o elemento gasolina para o primeiro elemento mesmo sendo colocado apos
//toda a lista

document.write('Variavel antes do decremento pop : moto = ',moto);
document.write("</br>")
moto.pop();
document.write('Variavel apos o decremento pop(); => moto = ',moto)



document.write("</br>")
document.write('--------------------------------------------------------',"</br></br>")

//FAZENDO REMOÇÃO COM SHIFT(); 
/* Usuando o shift podemos remover o primeiro elemento de um array, ele faz o inverso do unshift 
neste caso, vai remover o que foi colocado com unshift que seria o 'gasolina' */

document.write('Variavel antes do decremento(o primeiro elemento) com shift() => moto= ',moto)
document.write("</br>")
moto.shift();
document.write('variavel apois o decremento do primeiro elemento com shift() => moto= ',moto);

document.write("</br>")
document.write('--------------------------------------------------------',"</br></br>")

//FAZENDO REMOÇÃO DOS VALORES COM O METODO DE SPLICE==>
/**Usando esse metodo fica muito mais facil remover um indece que voce deseja, ja que com ele podemos 
 * simplismente fazer a escolha da quantidade de valores e quais valores queremos remover a um exemplo
 * mochila.splice(2,1)
 * nesse caso a explicação fica assim:  
 * mochila.splice( 2=> esse dois seria o local do valor que queriamos remover, 1 => esse um seria a quatidade valores apois a escolha de qual valor remover )
 * Vamos para a pratica de uso do splice
 */

/** VAR => Tipo de variavel 
 * novaMochila=> Nome da Variavel                                            indeces=  /   0   /   1   /     2    /    3    /   4   /
 * elemenos dentro do array no qual cada um tem seu propio indece e local na memoria ['facas','corda','lanterna','fosforo','celular']
 */
var novaMochila=['facas','corda','lanterna','fosforo','celular']

document.write('Mostrando o elemento antes de ser removido o indece 2 correspondente a lanterna => novaMochila: ',novaMochila)
document.write("</br>")
novaMochila.splice(2,1);
document.write('Mostrando o elemento apos a remoçao do elemento acima citado usando o splice .splice(2,1)=> novaMochila: ',novaMochila)

/**Nesse modelos quero remover a lanterna e printar a novaMochila antes e apos o decremento */


document.write("</br>")
document.write('--------------------------------------------------------',"</br></br>")


//FAZENDO O USO DO METODO -> indexOF();

/*USANDO A nova VARIAVEL nMochila
pode porcurar dentro dela algum valor 
*/

var nMochila=['facas','corda','lanterna','fosforo','celular']
//printando para o usuario acompanhar o valor dentro da variavel
document.write('Valore dentro da variavel antes da procura do indece "corda" que estar no 1=> nMochila: ',nMochila);
document.write("</br>")
document.write('O valor mostrado atravez do item corda tem que ser "1" :-> ',nMochila.indexOf('corda'));
document.write("</br>")
document.write('O valor mostrado atravez do item arme tem que ser "-1" pois ele nao estar dentro do array :-> ',nMochila.indexOf('arame'));
document.write("</br>")
//Se quiser apresentar outra coisa no local de -1 e 1 caso tenha pesquisado algo, so usar IF....

/*USA UM VARIAVEL PRA RECEBER UM VALOR */

valorContido= nMochila.indexOf('corda');
//ELE VAI PROCURA O VALOR DENTRO DO indexOf('') caso ele encontre vai ser mostrado 1 e não encontre vai ser -1 
if(valorContido==1){
    document.write('O valor buscado estar dentro do array: corda',"</br>");//Esse print vai ser caso seja recebido pela variavel valor 1
}else if(valorContido==-1){
    document.write('O valor nao estar contido dentro do array',"</br>");//Esse valor vaso seja recebido o valor -1 de não estar contido
}


document.write("</br>")
document.write('--------------------------------------------------------',"</br></br>")

//METODO SORT 
/*Com esse metodo podemos reorganizar uma array para deixa-lo em ordem crescente rapidademente (ele trocar o indece dos valores) */

var num=[3,1,4,3,2,5,7,9,0]
document.write('ordenação padrão num: ',num)
document.write("<br>")

num.sort();
document.write('Organização com sort(): ',num)

document.write("<br>")

//METODO REVERSE
var num2=[3,1,4,3,2,5,7,9,0]
/*Usando o reverse se reorganizar o arry de forma inversa do que foi criado 

ps: se quiser fazer um array decrescente so usar um sort(); para fazer crescente e usar um reverse com isso voce organza e inverte  

*/
num2.reverse();
document.write('Organização com reverse(); ',num2);


document.write("</br>")
document.write('--------------------------------------------------------',"</br></br>")

num3=num.join(' ');
document.write(num3)
console.log(num3)