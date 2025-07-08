let total = 0;

do {
  let input = prompt("შეიყვანეთ რიცხვი:");
  let number = Number(input);
  if (isNaN(number)) {
    alert("გთხოვთ შეიყვანოთ სწორი რიცხვი!");
    continue;
  }
  total += number;
} while (total <= 100);

alert("სულ ჯამი: " + total);