let soma = function(n){
    let a = 0;
    for(let i = 0; i < n.length; i++){
        a += n[i];
    }
    return a;
};

let numeros = [10,20,30,40,50];
console.log(soma(numeros));