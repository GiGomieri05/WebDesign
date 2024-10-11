var nome = "orava o avaro";
if(palindromo() == true){
    console.log("É um palindromo!")
}else{
    console.log("Não é um palindromo :(")
}

function inverte(n){
    let cont = n.length;
    let aux = '';

    for(var i = 0, j = cont - 1; i < cont; i++, j--){
        aux += n[j];
    }
    return aux;
}

function palindromo(){
    if(nome == inverte(nome)){
        return true;
    }
    return false;
}