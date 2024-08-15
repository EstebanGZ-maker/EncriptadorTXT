function encryptText() {
    
    let text = document.getElementById("inputText").value;
    let encryptedText = text 

    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");

    outputText.style.backgroundImage = "none";

    document.getElementById("outputText").value = encryptedText;
    
}

function descryptText() {
   
    let text = document.getElementById("inputText").value;
    let decryptedText = text 

    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");

    document.getElementById("outputText").value = decryptedText;

}

function copyText() {
    
    let textCopy = document.getElementById("outputText"); 
    textCopy.select();

}

function clearText() {
    
    document.getElementById("inputText").value = ""; 
    document.getElementById("outputText").value = "";

}