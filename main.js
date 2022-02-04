function mostraValor() {
    // Capturando os elementos necessários
    let inPreco = document.getElementById("inPreco");
    let inPorcem = document.getElementById("inPorcem");
    let resposta = document.getElementById("resposta");
    // Capturando o conteúdos dos elementos
    let preco = Number(inPreco.value);
    let porcem = Number(inPorcem.value);
    // Calculando o valor do desconto
    let desconto = (preco * porcem) / 100;
    // Calculando o preço final do produto
    let precoFinal = preco - desconto;
    // Mostrando o resultado na tela
    resposta.textContent = `Preço com desconto:  ${precoFinal} $`;
    resposta.style.padding = "20px";
    inPreco.value = "";
    inPorcem.value = "";
}

// Criando o evento do botão
let botao = document.getElementById("botao");
botao.addEventListener("click", mostraValor);