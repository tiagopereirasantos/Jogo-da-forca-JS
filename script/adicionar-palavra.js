function telaAdicionarPalavra(){

    telaForca.classList.add("invisivel");
    telaInicial.classList.add("invisivel");
    telaInserir.classList.remove("invisivel");

    var input = document.querySelector("#input-inserir");
    input.focus();
}