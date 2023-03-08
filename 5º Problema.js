function inverteString (string){
    var novaString = "";
    for (var i = string.length - 1; i>= 0; i--){
        novaString += string[i];
    }
    return novaString
}
inverteString("Olá")
console.log(inverteString('Rafael'))
console.log(inverteString('Problema da Inversão')) 