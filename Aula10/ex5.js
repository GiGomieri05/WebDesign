let cidades = ["Sorocaba","Piedade", "Votorantim"];

let troca_cidade = function(cidades){
    cidades.unshift("Sumaré");
    cidades.pop();

    return cidades;
};

console.log(troca_cidade(cidades));