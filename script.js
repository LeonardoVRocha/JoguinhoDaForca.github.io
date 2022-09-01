
let tentativas = 6;
let listaDinamica = [];

let palavraSecretaCaregoria;
let palavraSecretaSorteada;

const palavras = [
    palavra001 = {
        nome : "POLIETILENO",
        categoria : "POLÍMEROS MAIS UTILIZADOS NO BRASIL"
    },
    palavra002 = {
        nome : "POLIPROPILENO",
        categoria : "POLÍMEROS MAIS UTILIZADOS NO BRASIL"
    },
    palavra003 = {
        nome : "POLIESTIRENO",
        categoria : "POLÍMEROS MAIS UTILIZADOS NO BRASIL"
    },
    palavra004 = {
        nome : "NYLON",
        categoria : "PARA QUE SERVE UM POLIMEFERO"
    },
    palavra005 = {
        nome : "FIBRAS",
        categoria : "PARA QUE SERVE UM POLIMEFERO"
    },
    palavra006 = {
        nome : "PVC",
        categoria : "PARA QUE SERVE UM POLIMEFERO"
    },
    palavra007 = {
        nome : "BORRACHA",
        categoria : "ONDE SÃO ENCONTRADOS OS POLÍMIFEROS NATURAIS"
    },
    palavra008 = {
        nome : "AMIDO",
        categoria : "ONDE SÃO ENCONTRADOS OS POLÍMIFEROS NATURAIS"
    },
    palavra009 = {
        nome : "CELULOSE",
        categoria : "ONDE SÃO ENCONTRADOS OS POLÍMIFEROS NATURAIS"
    } , 
    palavra010 = {
        nome : "OTICAS",
        categoria : "QUAIS AS PROPRIEDADES DOS POLÍMEROS"
    },
    palavra011 = {
        nome : "REOLOGICAS",
        categoria : "QUAIS AS PROPRIEDADES DOS POLÍMEROS"
    },
    palavra011 = {
        nome : "DEGRADACAO",
        categoria : "QUAIS AS PROPRIEDADES DOS POLÍMEROS"
    },      
];

function criarPalavraSecreta() {
    const indexPalavra = parseInt(Math.random() * palavras.length)
    
    palavraSecretaSorteada = palavras[indexPalavra].nome;
    palavraSecretaCaregoria = palavras[indexPalavra].categoria;

    console.log(palavraSecretaCaregoria)
    console.log(palavraSecretaSorteada)
}

criarPalavraSecreta();
montarPalavra();

function montarPalavra (){
    let palavraCategoria = document.getElementById("categoria")
    palavraCategoria.innerHTML = palavraSecretaCaregoria;

    let palavraResposta = document.getElementById("palavra-secreta")
    palavraResposta.innerHTML = "";

    for(i = 0; i < palavraSecretaSorteada.length; i++){
        if(listaDinamica[i] == undefined){
            listaDinamica[i] = "&nbsp;";
            palavraResposta.innerHTML = palavraResposta.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>";
        } else {
            palavraResposta.innerHTML = palavraResposta.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>";
        }
    }
}

function verificaLetraEscolhida(letra) {
    document.getElementById("tecla-" + letra).disabled = true;
    
    if(tentativas > 0){
        mudarStyleLetra("tecla-" + letra, false);
        comparaLista(letra);
        montarPalavra();
    }
}

function mudarStyleLetra(tecla, condicao){
    if(condicao == false){
        document.getElementById(tecla).style.background = "#C71585";
        document.getElementById(tecla).style.color = "#FFF";
    }else {
        document.getElementById(tecla).style.background = "#008000";
            document.getElementById(tecla).style.color = "#FFF";
    }
}

function comparaLista(letra){
    const posicao = palavraSecretaSorteada.indexOf(letra)
    if(posicao < 0){
        tentativas--
        carregaImagemForca();
        if(tentativas == 0){
            abreModal("OPS!","Não foi dessa vez 😂... a palavra secreta era <br>" + palavraSecretaSorteada + "!" );
        }


    } else {
        mudarStyleLetra("tecla-" + letra, true);
        for(i = 0; i < palavraSecretaSorteada.length; i++) {
            if(palavraSecretaSorteada[i] == letra){
                listaDinamica[i] = letra;
            }
        }
    }

    let vitoria = true;
    for(i = 0; i < palavraSecretaSorteada.length; i++){
        if(palavraSecretaSorteada[i] != listaDinamica[i]){
            vitoria = false;
        }
    }

    if(vitoria == true){
        abreModal("PARABÉNS!","Você venceu 🏆! <br>");
        tentativas = 0;
    }
    
}

function carregaImagemForca() {
    switch(tentativas){
        case 5:
            document.getElementById("imagem").style.background = "url('./img/forca01.png')";
            break;
        case 4:
            document.getElementById("imagem").style.background = "url('./img/forca02.png')";
            break;
        case 3:
            document.getElementById("imagem").style.background = "url('./img/forca03.png')";
            break;
        case 2:
            document.getElementById("imagem").style.background = "url('./img/forca04.png')";
            break;
        case 1:
            document.getElementById("imagem").style.background = "url('./img/forca05.png')";
            break;
        case 0:
            document.getElementById("imagem").style.background = "url('./img/forca06.png')";
            break;
        default: document.getElementById("imagem").style.background = "url('./img/forca.png')";
            break;
    }
}

function abreModal (titulo, mensagem) {
    let modalTitulo = document.getElementById("exampleModalLabel");
    modalTitulo.innerHTML = titulo;        
    let modalMensagem = document.getElementById("modalBody");
    modalMensagem.innerHTML = mensagem;

    $("#myModal").modal({
        show: true
    });
}

let btnReiniciar = document.querySelector("#resetar")
btnReiniciar.addEventListener("click", function reload(){
    location.reload();
});