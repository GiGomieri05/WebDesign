document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("formulario-cards").addEventListener("submit", function(event) {
        event.preventDefault(); 
        pegarValor();
    });

    buscaCards();
});

let lista = [];

function buscaCards() {
    atualizaLista(lista);
}

function pegarValor() {
    let nomeCampo = document.querySelector('#formulario-titulo');
    if (nomeCampo) {
        let valorNome = nomeCampo.value;
        if (valorNome) {
            adicionar(valorNome);
            nomeCampo.value = ''; // Limpa o campo após adicionar
        } else {
            console.error("O valor do título não pode ser vazio.");
        }
    } else {
        console.error("Campo de input não encontrado.");
    }
}

function adicionar(valor) {
    let novoCard = {
        "titulo": valor,
        "imagem": `https://picsum.photos/200/100?random=${Math.random()}`
    };
    lista.push(novoCard);
    console.log("Card adicionado:", novoCard);
    buscaCards();
}

function atualizaLista(listaCards) {
    let listaElement = document.querySelector('#lista-cards');
    listaElement.innerHTML = '';

    listaCards.forEach((cartao, index) => {
        listaElement.innerHTML += 
        `<div id="${index}" class="card mx-2 my-2" style="width: 18rem;">
            <img src="${cartao.imagem}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${cartao.titulo}</h5>
                <button type="button" class="btn btn-danger" onclick="apagarCard(${index})">Apagar</button>
            </div>
        </div>`;
    });
}

function apagarCard(index) {
    lista.splice(index, 1);
    buscaCards();
}

function apagarTodos() {
    lista = [];
    buscaCards();
}
