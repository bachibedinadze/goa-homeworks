function hasOwn(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

const obj1 = { name: "Alice", age: 25 };
const obj2 = Object.create({ inherited: true });
obj2.own = "I am own";
const obj3 = { score: 100, passed: true };

console.log(hasOwn(obj1, "name"));
console.log(hasOwn(obj1, "toString")); 
console.log(hasOwn(obj2, "own"));
console.log(hasOwn(obj2, "inherited"));
console.log(hasOwn(obj3, "score"));
console.log(hasOwn(obj3, "failed"));