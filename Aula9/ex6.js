var num = 1;
dobro();

function dobro(){
    if(num < 0 || num === 0){
        console.log("Só é aceito números positivos maiores que zero.");
    }else{
        num*=2;
        console.log("Dobro do Número Passado = " + num);
    }
}