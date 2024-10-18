var endereco = {
    "rua": "Rua Fafá de Belém",
    "numero": 1987,
    "bairro": "Bairro Crias de SP",
    "cidade": "Rio de Januario"
};

let mostra = function(){
    for (let prop in endereco) {
        console.log(prop +" "+endereco[prop]);
    }
};

mostra();