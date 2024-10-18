let numeros = [1,2,3,4,5,6,7,8,9,10];

let impares = function(num){
    let n_impares = [];
    for(let i = 0; i < num.length; i++){
        if(num[i] % 2 == 1){
            n_impares.push(num[i]);
        }
    }
    return n_impares;
}

console.log(impares(numeros));