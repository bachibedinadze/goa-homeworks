let url = "https://example.com/";
let urlCheck = url.endsWith("/");

function endsWithS(word) {
  return word.endsWith("s");
}

let word1 = "cats";
let word2 = "dog";

let results = "";
results += `URL: ${url} → ends with "/": ${urlCheck}\n`;
results += `${word1} → ends with "s": ${endsWithS(word1)}\n`;
results += `${word2} → ends with "s": ${endsWithS(word2)}\n`;

document.getElementById("output").textContent = results;