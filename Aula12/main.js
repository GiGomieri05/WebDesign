/*
function displayConsole(msg){
    console.log(msg);
}

function displayHTML(msg){
    document.querySelector('titulo').innerHTML = msg;
}

function soma(num1, num2, callback){ //callback é chamar uma funcao por parametro
    let result = num1 + num2;
    callback(result);
}

soma(2, 3, displayConsole);
*/

let file = "https://6724b58ac39fedae05b270eb.mockapi.io/clientes";

/**

fetch(file) //funciona somente em html
    .then(response => response.json()) //transformo o que eu recebi em texto (Tratar em JSON, Blob ou Texto)
    .then(obj => {
        console.log(obj);
        document.querySelector('#txt').innerHTML = obj.nome; //pegando a propriedade do meu json 
    });
 */

fetch(file) //funciona somente em html
    .then(response => response.json()) //transformo o que eu recebi em texto (Tratar em JSON, Blob ou Texto)
    .then(myArray => {
        console.log(myArray);
        document.querySelector('#txt').innerHTML = myArray[0].nome; //pegando a propriedade do meu json 
        document.querySelector('#foto').src = myArray[0].avatar;
        document.querySelector('#id').innerHTML = myArray[0].id;
    })
    .catch(err => {
        console.log(err);
    });


function adicionar() {
    fetch('https://650c495247af3fd22f67683e.mockapi.io/usuario', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "nome": 'Memphis Depay',
            "idade": 94
        })
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Erro:', error));
}