const textArea = document.querySelector(".text_area");
const resultado = document.querySelector(".Resultado");

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    resultado.value = textoEncriptado  
    textArea.value = "";      
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["a","xdhn"],["e","otgk"],["i","htnb"],["o","vews"],["u","glfd"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }

    }
    return stringEncriptada;

}
