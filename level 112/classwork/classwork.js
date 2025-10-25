// 1.
const numbers = [5, 12, 7, 20, 9];

// 2.
const updatedNumbers = numbers.map(num => num % 2 === 0 ? num + 10 : num - 10);

console.log("განახლებული მასივი:", updatedNumbers);

// 3.
function sumFive(a, b, c, d, e) {
  console.log("ჯამი:", a + b + c + d + e);
}

// 4.
sumFive(...updatedNumbers);