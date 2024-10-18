var produto = {
    "nome": "Estilingue",
    "preco": 19.9,
    "quantidade": 13,
    
    calcularTotal: function(){
        return this.preco * this.quantidade;
    }
};

console.log(produto.calcularTotal());