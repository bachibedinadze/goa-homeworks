// 2-6) Using at()
console.log("2:", "JavaScript".at(0)); 
console.log("3:", "OpenAI".at(-1)); 
console.log("4:", "Programming".at(4)); 

function getMiddleChar(str) {
  let mid = Math.floor(str.length / 2);
  return str.at(str.length % 2 === 0 ? mid - 1 : mid);
}
console.log("5:", getMiddleChar("Hello")); 
console.log("5:", getMiddleChar("Worlds")); 

console.log("6:", "Hello World".at(-2)); 

// 7-11) Using concat()
console.log("7:", "Hello".concat(" ", "World")); 
console.log("8:", "Good".concat(" ", "Morning")); 
console.log("9:", "Age: ".concat(String(25))); 
console.log("10:", "Exciting".concat("!")); 
console.log("11:", "Test".concat("")); 

// 12-16) Using endsWith()
console.log("12:", "Hello World".endsWith("World")); 
console.log("13:", "filename.pdf".endsWith(".pdf")); 
console.log("14:", "https://example.com/".endsWith("/")); 

function endsWithS(word) {
  return word.endsWith("s");
}
console.log("15:", endsWithS("books")); 
console.log("15:", endsWithS("car")); 

console.log("16:", "JavaScript".endsWith("Java", 4)); 