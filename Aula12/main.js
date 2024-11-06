// function displayConsole(msg) {
//     console.log(msg);
// }

// function displayHTML(msg) {
//     document.querySelector('titulo').innerHTML = msg;
// }


// function soma(num1, num2, callback) {
//     let result = num1 + num2;
//     callback(result);
// }

// soma(2, 3, displayConsole);

let file = "https://6724b58ac39fedae05b270eb.mockapi.io/clientes";

fetch(file)
    .then(response => response.json())
    .then(myArray => {
        console.log(myArray);
        document.querySelector('#txt').innerHTML = myArray[1].nome;
        document.querySelector('#foto').src = myArray[1].avatar;
        document.querySelector('#id').innerHTML = myArray[1].id;
    })
    .catch(err => {
        console.log(err);
    });


function adicionar() {
    fetch(file, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nome: 'Fábio Colombini',
            avatar: 'https://www.google.com.br'
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    });
}