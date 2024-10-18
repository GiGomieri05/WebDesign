var aluno = [{"nome": "Ferdinando", "idade": 19}, 
            {"nome": "Caio", "idade": 11}, 
            {"nome": "Amanda", "idade": 21}, 
            {"nome": "Ferdinando", "idade": 18},
            {"nome": "Pedro", "idade": 15}];

let alunosMaior = function(a){
    let aux = [];

    for(let i = 0; i < a.length; i++)
        if(a[i].idade > 18){
            aux.push(a[i]);
        }
    
    return aux;   
}

console.log(alunosMaior(aluno));