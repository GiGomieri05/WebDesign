let numeros = [36,33,71,68,73,87,6,67,90,6];

let encontraMaiorNumero = function(n){
    let maior_n = 0;

    for(let i = 0; i < n.length; i++){
        if(i == 0)
            maior_n = n[i];
        if(n[i] > maior_n)
            maior_n = n[i];
    }

    return maior_n;
};

console.log(encontraMaiorNumero(numeros));