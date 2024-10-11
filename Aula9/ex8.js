var texto = "A dona aranha subiu pela parede"

function contaVogais(n){
    let cont = 0;

    for(var i = 0; i < n.length; i++){
        switch(n[i]){
            case 'a': 
            case 'e':
            case 'i':
            case 'o':
            case 'u': cont++; 
                      break;
        }
    }

    return cont;
}

console.log("Quantidade de vogais minusculas = " + contaVogais(texto));

