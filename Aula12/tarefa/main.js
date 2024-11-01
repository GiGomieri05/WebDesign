let file = "https://6724b58ac39fedae05b270eb.mockapi.io/animal";

fetch(file) // URL da API
    .then(response => response.json())
    .then(myArray => {
        const list = document.querySelector('#lista');
        list.innerHTML = ''; // Limpa a lista antes de popular

        // Itera sobre o array de dados
        myArray.forEach((item) => {
            const novoItem = document.createElement('li');

            // Adiciona o conteúdo desejado no elemento <li>
            novoItem.innerHTML = item.nome; // Use `item.algumCampo` se item for um objeto

            // Adiciona o novo item à lista
            list.appendChild(novoItem);
        });
    })
    .catch(error => console.error("Erro ao buscar dados da API:", error)); // Tratamento de erro opcional