// ===================== 2–6) Includes / Contains =====================
let includesResults = "";

// 2) Check if "dog" exists
const text2 = "The quick brown fox jumps over the lazy dog";
includesResults += `2) "dog" exists: ${text2.includes("dog")}\n`;

// 3) Function to check if string contains "@"
function containsAt(str) {
    return str.includes("@");
}
includesResults += `3) "email@example.com" contains "@": ${containsAt("email@example.com")}\n`;

// 4) Check if "Java" exists in "JavaScript"
includesResults += `4) "Java" exists in "JavaScript": ${"JavaScript".includes("Java")}\n`;

// 5) Check if "apple" exists in "pineapple"
includesResults += `5) "apple" exists in "pineapple": ${"pineapple".includes("apple")}\n`;

// 6) Function to check if a sentence contains "not"
function containsNot(sentence) {
    return sentence.includes("not");
}
includesResults += `6) "I am not happy" contains "not": ${containsNot("I am not happy")}\n`;

console.log(includesResults);
document.getElementById("includesResults").textContent = includesResults;

// ===================== 7–11) indexOf =====================
let indexOfResults = "";

// 7) Index of "fox"
indexOfResults += `7) Index of "fox": ${text2.indexOf("fox")}\n`;

// 8) Index of first "o" in "Hello world"
indexOfResults += `8) Index of first "o" in "Hello world": ${"Hello world".indexOf("o")}\n`;

// 9) Index of "2025" in "Happy New Year 2025!"
indexOfResults += `9) Index of "2025": ${"Happy New Year 2025!".indexOf("2025")}\n`;

// 10) Index of "is" in "This is a simple test"
indexOfResults += `10) Index of "is": ${"This is a simple test".indexOf("is")}\n`;

// 11) Function that returns index of "@" or -1
function indexOfAt(str) {
    return str.indexOf("@");
}
indexOfResults += `11) Index of "@" in "user@example.com": ${indexOfAt("user@example.com")}\n`;

console.log(indexOfResults);
document.getElementById("indexOfResults").textContent = indexOfResults;

// ===================== 12–16) lastIndexOf =====================
let lastIndexOfResults = "";

// 12) Last index of "o" in "Hello world"
lastIndexOfResults += `12) Last index of "o" in "Hello world": ${"Hello world".lastIndexOf("o")}\n`;

// 13) Last index of "a" in "banana"
lastIndexOfResults += `13) Last index of "a" in "banana": ${"banana".lastIndexOf("a")}\n`;

// 14) Last index of "is" in "This is a test, and it is simple"
lastIndexOfResults += `14) Last index of "is": ${"This is a test, and it is simple".lastIndexOf("is")}\n`;

// 15) Last index of "dog" in "dog dog dog"
lastIndexOfResults += `15) Last index of "dog" in "dog dog dog": ${"dog dog dog".lastIndexOf("dog")}\n`;

// 16) Last index of "2025" in "Happy 2025, welcome 2025!"
lastIndexOfResults += `16) Last index of "2025": ${"Happy 2025, welcome 2025!".lastIndexOf("2025")}\n`;

console.log(lastIndexOfResults);
document.getElementById("lastIndexOfResults").textContent = lastIndexOfResults;