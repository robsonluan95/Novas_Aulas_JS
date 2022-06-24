var idade=prompt('Qual sua idade?',);

if (idade<=17){
    alert("Voce ainda é de menor ")
}else if(idade>17){
    var confirmacao=confirm(`Sua idade é ${idade} ?`)
    if (confirmacao){
        document.write('Pode pegar na do malandro')
    }else{
        document.write('Não pode pegar na do malandro')
    }
}
document.write('<br>')
var pontos=prompt('Quantos pontos ele fez?',)

if((pontos>=20&&pontos<=30)||(pontos>=50&&pontos<=60)){
    document.write('ganhou')
}else{
    document.write('perdeu')
}

