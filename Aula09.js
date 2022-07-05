//TRATAMENTO DE ERROS -- TRY CATCH FINALLY

try{
    document.write('NÃO TEM ERRO',"<br>")
}catch(error){
    document.write('OBTEVE ERRO',"<br>")
}

try{
    document.wriete('NÃO TEM ERRO 2',"<br>")
}catch(error2){
    document.write('OBTEVE ERRO 2',"<br>")
    document.write(error2,"<br>")
}

//GERANDO MODO ERRO

var num;//VALOR MAXIMO 

try{
    num=prompt('valor:')
    if (num>10){
        throw new Error('Valor invalido')//o THROW NEW ADICIONA A VARIAVEL ERRO O TEXTO
    }
    document.write('Valor escolhido foi: ',num)
}catch(error3){
    document.write('Valor muito alto ',error3)

}finally{//o finally é executado de toda forma tendo erro ou não
    document.write("<br>",'FIM')
}