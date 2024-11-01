const result = document.querySelector(".resultados");
const btns   = document.querySelectorAll(".botoes button");

let num_atual   = "";
let primeiro_op = null;
let operador    = null;
let recomecar   = false;

function atualizaResultado(limpa_orig = false){
    result.innerText = limpa_orig ? 0 : num_atual.replace(".", ",");

}

function adiciona_digito(digito){
    if(digito === "," && (num_atual.includes(",") || !num_atual))
        return;

    if(recomecar){
        num_atual = digito;
        recomecar = false;
    }else{
        num_atual += digito;
    }

    atualizaResultado();
};

function define_operador(novo_operador){
    if(num_atual){
        calcula();

        primeiro_op = parseFloat(num_atual.replace(",", "."));
        num_atual = "";
    }

    operador = novo_operador;
}

function calcula(){
    if(operador === null || primeiro_op === null) return;
    let segundo_op = parseFloat(num_atual.replace(",", "."));
    let valor_resultado;

    switch(operador){
        case "+":
            valor_resultado = primeiro_op + segundo_op;
            break;
        case "-":
            valor_resultado = primeiro_op - segundo_op;
            break;
        case "*":
            valor_resultado = primeiro_op * segundo_op;
            break;
        case "/":
            valor_resultado = primeiro_op / segundo_op;
            break;
        default:
            return;
    }

    if(valor_resultado.toString().split(".")[1]?.length > 10){
        num_atual.parseFloat(valor_resultado.toFixed(10).toString());
    }else{
        num_atual = valor_resultado.toString();
    }

    operador    = null;
    primeiro_op = null;
    recomecar   = true;
    atualizaResultado();
}

function limpaCalc(){
    num_atual   = "";
    primeiro_op = null;
    operador    = null;
    atualizaResultado(true);
}

btns.forEach((button) =>{
    button.addEventListener("click", ()=>{  // corrigido para 'button'
        const buttonText = button.innerText;
        if(/^[0-9,]+$/.test(buttonText)){
            adiciona_digito(buttonText);
        }else if(["+", "-", "*", "/"].includes(buttonText)){
            define_operador(buttonText);
        }else if(buttonText === "="){
            calcula();
        }else if(buttonText === ""){
            limpaCalc();
        }
    });
});
