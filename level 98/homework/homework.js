const nums = [-3, -2, 5, -8];
console.log(nums.some(n => n > 0));
console.log(nums.some(n => n % 2 === 0));
const words = ["cat", "elephant", "dog"];
console.log(words.some(w => w.length > 5));
const mixed = [0, "hello", false, 42];
console.log(mixed.some(v => !v));
function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}
console.log(nums.some(isPrime));

const arr = [10, 20, 30];
arr.forEach(v => console.log(v));
arr.forEach((v, i) => console.log(`Index: ${i}, Value: ${v}`));
const sum = arr.reduce((a, b) => a + b, 0);
console.log("Sum:", sum);
["apple", "banana"].forEach(s => console.log(s.toUpperCase()));
[{name: "Alice"}, {name: "Bob"}].forEach(o => console.log(o.name));

console.log([1, 2, 3, 4].map(n => n * n));
console.log([1, 2, 3].map(n => n * 2));
console.log(["a", "b"].map(s => s.toUpperCase()));
console.log([{name: "Alice", age: 25}, {name: "Bob", age: 30}].map(p => p.name));
console.log([5, 15, 25].map(n => n + 10));