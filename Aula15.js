// APRENDENDO A FAZER FUNÇÃO

// Função criada so parar retorna um print(mais simples)
function escreve(dias){
    var quant=dias
    document.write(dias," curso ")
}
escreve(10);

//Variavel usada para retorna um valor 
function soma(n1,n2){
    var resultado=(n1+n2)
    return resultado
}

document.write(soma(10,5))
document.write("<br>")

//Variavel usada para fazer um contatdor atravez de um array

var numeros=[1,2,3,4,5,6];
function media(nums){
    var tamanho=nums.length;
    var total=0
    for (var i =0;i<tamanho;i++){
        total+=nums[i];
    }
    var valor=total/tamanho
    return valor
}

document.write("VALORES DA FUNÇÂO MEDIA: ",media(numeros))