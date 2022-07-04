
//MATRIZ- 
/*
Matriz em JS é um array dentro de outro array em posição de coluna 

*/


//Nessa exemplo vamos usar o primeiro termo no array item para dizer o nome e o segundo termo para demosntrar a quantidade!
//DEVEMOS INPLEMENTAR [] PARA QUE A MATRIZ SEJA CRIADA VAZIA PARA APOS ELA SEJA INCREMENTADA COM OS VALORES DESEJAVEIS =>

var t=1
var matriz=[];//==> PRIMEIRA CRIAÇÃO
colunas=prompt('Quantas colunas: ')
linhas=prompt('quantas linhas: ')
 for (var i=0;i<colunas;i++){
    matriz[i]=[];//==> SEGUNDA CRIAÇÃo --NESSA AQUI ESTAMOS CRIANDO AS COLUNAS PARA QUE ELA RECEBA AS LINHAS 
    document.write("<br>")
    for (var j=0;j<linhas;j++){
        matriz[i][j]=t;//==> TERCEIRA CRIAÇÃO -- NESSE CASO FOI CRIADO AS LINHAS E NELA JA ADICIONADO O VALOR NO QUAL DEVEMOS ADICIONAR 
        document.write(t,' ')
        t++
        
        
    }
   
 }