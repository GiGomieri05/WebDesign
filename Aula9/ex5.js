var texto = "";
for (var i = 1; i <= 10; i++){
    if(i < 10){
        texto += (i + " - ");
    }else{
        texto += i;
    }
}
console.log(texto);