
let tentativas = 6;
let listaDinamica = [];

let palavraSecretaCaregoria;
let palavraSecretaSorteada;

const palavras = [
    palavra001 = {
        nome : "ABELHA",
        categoria : "Qual inseto produz mel?"
    },
    palavra002 = {
        nome : "LEAO",
        categoria : "Quem é o rei da selva?"
    },
    palavra003 = {
        nome : "BALEIA",
        categoria : "Qual é o maior animal do mar?"
    },
    palavra004 = {
        nome : "MACACO",
        categoria : "Qual animal ama Banana?"
    },
    palavra005 = {
        nome : "ZEBRA",
        categoria : "Qual animal tem listras pretas e brancas?"
    },
    palavra006 = {
        nome : "LEOA",
        categoria : "Quem é a parceira do Leao?"
    },
    palavra007 = {
        nome : "BODE",
        categoria : "Qual é o animal que vive encima da montanha?"
    },
    palavra008 = {
        nome : "GALINHA",
        categoria : "Quem é a mae dos pintinhos?"
    },
    palavra009 = {
        nome : "GALO",
        categoria : "Quem faz Có Có Có ri có?"
    } , 
    palavra010 = {
        nome : "PATO",
        categoria : "Qual é o animal que pode andar em todos os terrenos: mar, terra e ar:"
    },
    palavra011 = {
        nome : "GATO",
        categoria : "Qual é o animal que gosta de leite?"
    },
    palavra012 = {
        nome : "DOIS",
        categoria : "Quantos pares de asas a aguia tem ? "
    },
    palavra013 = {
        nome : "CORDEIRO",
        categoria : "Como se chama o filhote da ovelha ? "
    },
    palavra014 = {
        nome : "OITO",
        categoria : "Quantas pernas tem um polvo ? "
    },
    palavra015 = {
        nome : "BAMBU",
        categoria : "Oque o panda come ? "
    },
    palavra016 = {
        nome : "MORCEGO",
        categoria : "Qual é o unico mamifero que pode voar ? "
    },
    palavra017 = {
        nome : "CACHORRO",
        categoria : "Qual é o animal conhecido como amigo do homem ? "
    },      
    palavra018 = {
        nome : "ELEFANTE",
        categoria : "Qual é o animal terrestre que não pode pular ? "
    },
    palavra019 = {
        nome : "BEIJAFLOR",
        categoria : "Qual é o passaro que pode voar para trás ? "
    },
    palavra020 = {
        nome : "AVESTRUZ",
        categoria : "Qual é a ave mais alta do mundo ? "
    },
    palavra021 = {
        nome : "FALCAO",
        categoria : "Qual é o passaro mais rapido ? "
    },
    palavra022 = {
        nome : "FORMIGA",
        categoria : "Qual é o inseto que pode levantar até 50x o seu peso ? "
    },
    palavra023 = {
        nome : "PYTHON",
        categoria : "Qual é a cobra mais grande ? "
    },
    palavra024 = {
        nome : "DEZ",
        categoria : "Quantas pernas tem uma lagosta ? "
    },
    palavra025 = {
        nome : "OITO",
        categoria : "Quantos pernas tem uma aranha ? "
    },
    palavra026 = {
        nome : "BALEIA",
        categoria : "Qual é o maior mamifero ? "
    },
    palavra027 = {
        nome : "POLVO",
        categoria : "Qual animal tem tres corações ? "
    },
    palavra028 = {
        nome : "SAPOBOI",
        categoria : "Qual animal nunca dorme ? "
    },
    palavra029 = {
        nome : "NENHUM",
        categoria : "Quantos ossos o tubarao tem ? "
    },
    palavra030 = {
        nome : "TRES",
        categoria : "Quantos anos o caracol pode dormir ? "
    },
    palavra031 = {
        nome : "SIM",
        categoria : "Os coelhos nascem cego ? "
    },
    palavra032 = {
        nome : "SAPO",
        categoria : "Qual é o animal que respira pela pele ? "
    },
    palavra032 = {
        nome : "BARATA",
        categoria : "Qual é o inseto que se você ver você diz Aii socorroo, Meu Deus que medo ? "
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