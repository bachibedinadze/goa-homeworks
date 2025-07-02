const paragraphs = document.getElementsByTagName("p");
const texts = [];
for (let i = 0; i < paragraphs.length; i++) {
  texts[i] = paragraphs[i].textContent;
}
console.log(texts);