var listaCriptografica = ["enter", "imes", "ai", "ober", "ufat"];
var listaNormal = ["e", "i", "a", "o", "u"];

const codigoParaCriptografar = {
    "e": "enter",
    "i": "imes",
    "a": "ai",
    "o": "ober",
    "u": "ufat"
}

const codigoParaDescriptografar = {
    "enter": "e",
    "imes": "i",
    "ai": "a",
    "ober": "o",
    "ufat": "u"
}

function criptografaTexto(texto) {
    let textoConvertido = texto;
    listaNormal.forEach(function (letra) {
        textoConvertido = textoConvertido.replaceAll(letra, codigoParaCriptografar[letra])
    })
    return textoConvertido;
}

function descriptografaTexto(texto) {
    let textoParaConverter = texto;
    listaCriptografica.forEach(function (letra) {
        textoParaConverter = textoParaConverter.replaceAll(letra, codigoParaDescriptografar[letra])
    })
    return textoParaConverter;
}

