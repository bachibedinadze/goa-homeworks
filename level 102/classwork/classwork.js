const paragraph = document.getElementById("text");
const button = document.getElementById("btn");

const texts = [
  "გამარჯობა!",
  "როგორ ხარ?",
  "დღეს მშვენიერი ამინდია!",
  "წარმატებები!",
  "გახსოვდეს, რომ შენ შეგიძლია!"
];

button.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * texts.length);
  paragraph.textContent = texts[randomIndex];
});