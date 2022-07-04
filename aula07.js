// COMANDO FOR{}


/*
 o 1 parametro seria o ==> var i=0; --> nesse caso seria iniciado a variavel com um valor inicial   
 o 2 parametro seria o ==> i<5; --> nesse o valor de i anterior mente estabelecido seria a condção ate chegar o 5
 o 3 paramentro seria o i++ --> que aqui é um incremento estabelecido para atingir os parametro 2
*/

for (var i=0;i<5;i++){
}

//Fazendo um for para o usuario implementar valores
array=[];
linhas=prompt('Digite a quantidade de valores que voce deseja: ')
for (cont=0;cont<linhas;cont++){
    var valores=prompt(`Valor da linha ${(cont)}`)
    array[cont]=valores;
}
for (cont2=0;cont2<linhas;cont2++){
    document.write(array[cont2], " ")
}

//USANDO FOR COM MATRIZ

//USANDO UMA MOCHILA

var mochila=[
    ['corda',1],
    ['cura',2],
    ['lanterna',3],
    ['remedios',6],
    ['chaves',1]
];

for (var itens=0;itens<=4;itens++){
    for(var quant=0;quant<=1;quant++){
        document.write(mochila[itens][quant]+' ')
    }
    document.write("<br>")
}