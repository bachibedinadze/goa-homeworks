function allActive(arr) {
  return arr.every(item => item.status === "active");
}

const users1 = [
  { name: "Alice", status: "active" },
  { name: "Bob", status: "active" }
];

const users2 = [
  { name: "Alice", status: "active" },
  { name: "Bob", status: "inactive" }
];

console.log(allActive(users1));
console.log(allActive(users2));
console.log(allActive([]));