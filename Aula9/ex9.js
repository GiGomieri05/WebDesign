var email = "giovanni.gomieri@facens.br";

function isEmailValido(){
    if(email.indexOf('@') > 0){
        if(email.includes('@')){
            if(email.includes('.', email.indexOf('@'))){
                return true;
            }
        }
    }
    return false;
}

if(isEmailValido()){
    console.log("Email validado!");
} else{
    console.log("Esse email nao existe");
}