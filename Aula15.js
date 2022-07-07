// APRENDENDO A FAZER FUNÇÃO


function escreve(){
    document.write("curso ")
}
escreve();
function soma(n1,n2){
    var resultado=(n1+n2)
    return resultado
}

document.write(soma(10,5))
document.write("<br>")

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