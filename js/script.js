var textInput = document.querySelector("#input-texto");
var outInput = document.querySelector("#output");

function criptografar() {
    var texto = textInput.value;

    var resultCripto = texto.replace(/e/g, "enter").replace(/i/g, "borboleta").replace(/a/g, "amor")
    .replace(/o/g, "flor").replace(/u/g, "ufat");

    document.getElementById('output').innerHTML = '<textarea readonly id="input-texto">' + resultCripto + '</textarea>' + '<button class="ntn-copiar" id="copiar" onclick="copiar()">Copiar</button>'
}

function descriptografar() {
    var texto = textInput.value;

var resultDescripto = texto.replace(/enter/g, "e").replace(/borboleta/g, "i").replace(/amor/g, "a")
.replace(/flor/g, "o").replace(/ufat/g, "u");

document.getElementById('output').innerHTML = '<textarea readonly id="input-texto">' + resultDescripto + '</textarea>' + '<button class="ntn-copiar" id="copiar" onclick="copiar()">Copiar</button>'
}

function copiar() {
    var textoCop = document.getElementById('input-texto');
  
    textoCop.select();
    document.execCommand('copy');
    alert("Seu texto foi copiado! ♥");
}  