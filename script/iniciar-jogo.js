var telaInicial = document.querySelector("#tela-inicial");
var telaInserir = document.querySelector("#tela-inserir");
var telaForca = document.querySelector("#tela-forca");

function iniciaJogo(){
    telaForca.classList.remove("invisivel");
    telaInicial.classList.add("invisivel");
    telaInserir.classList.add("invisivel");

    var tela = document.querySelector("canvas");
    var pincel = tela.getContext("2d");
}   

