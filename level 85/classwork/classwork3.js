let globalVar = "მე გლობალური ვარ";

function showGlobal() {
    console.log(globalVar); // შეუძლია წვდომა გლობალურ ცვლადზე
}

showGlobal(); // გამოიტანს: მე გლობალური ვარ  

function myFunction() {
    let functionVar = "მე ფუნქციის შიგნით ვარ";
    console.log(functionVar); // მუშაობს
}

myFunction();
// console.log(functionVar); // შეცდომა: functionVar is not defined


{
    let blockVar = "მე ბლოკის შიგნით ვარ";
    console.log(blockVar); // მუშაობს
}

// console.log(blockVar); // შეცდომა: blockVar is not defined