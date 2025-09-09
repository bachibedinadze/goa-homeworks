const products = [
  { name: "Laptop", price: 1200 },
  { name: "Mouse", price: 25 },
  { name: "Keyboard", price: 80 },
  { name: "Monitor", price: 300 },
  { name: "USB Cable", price: 10 }
];

const cheapProducts = products.filter(product => product.price < 100);

console.log(cheapProducts);