let nome = "Ganhei na loteria";
console.log(inverte(nome));

function inverte(n){
    let cont = n.length;
    let aux = '';

    for(var i = 0, j = cont - 1; i < cont; i++, j--){
        aux += n[j];
    }
    return aux;
}