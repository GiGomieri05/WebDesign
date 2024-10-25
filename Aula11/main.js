document.getElementById("botao_titulo").onclick =() => {
    changeText(document.getElementById("titulo"));
};

document.getElementById("troca_imagem_dahora").onclick =() => {
    changeImagem(document.getElementById("imagem_dahora"));
};

document.getElementById("troca_colores").onclick = () => {
    changeCondores(document.getElementById("lorena"));
};

const botoes = Array.from(document.querySelectorAll('.botao_estilo_2'));
const audio = document.getElementById('craque-neto');

document.getElementById('toca-o-hino').onclick = () => {
    // TOCA O HINO DO CURINTHIA KASKAO
    audio.play();
};

botoes[0].onclick = () => {
    botoes.forEach((botao) => {
        botao.classList.toggle('boton-ativo');
    });
};

function changeCondores(id){
    if(id.style.color === "red"){
        id.style.color = "black";
    }else{
        id.style.color = "red";
    }
}

function changeImagem(id){
    if(id.src.includes("img/dog.jpeg")){
        id.src = "img/Vert (1).png";
    }else{
        id.src = "img/dog.jpeg";
    }
}

function changeText(id) {
    if(id.innerHTML == "Título"){
        id.innerHTML = "Ooops!";
    }   
    else{
        id.innerHTML = "Título";
    }
}