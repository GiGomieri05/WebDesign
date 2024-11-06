let file = "https://6724b58ac39fedae05b270eb.mockapi.io/animal";

function buscaAnimais(){
    fetch(file)
    .then(response => response.json())
    .then(myArray => {
        console.log(myArray);
        atualizaLista(myArray);
    });
}

function atualizaLista(listaAnimais){
    let lista = document.querySelector('#lista'); //busco no meu html onde esta a minha lista

    lista.innerHTML = ''; //limpo os valores que estao na lista quando recarrego a pagina

    listaAnimais.forEach((animal, index) => {
        lista.innerHTML += 
        `<li id="${index}" class="cartao tillana">${animal.id} - <b>${animal.nome}</b> (${animal.idade}) - ${animal.raca} </li>`;
    });
}

function adicionar() {
    fetch(file, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nome: 'Totó',
            idade: 12,
            raca: 'Cachorro'
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        buscaAnimais();
    })
    .catch(err => {
        console.log(err);
    });

}