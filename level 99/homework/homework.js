// 2.
let arr1 = ["Banana", "Apple", "Avocado", "Cherry"];
let firstA = arr1.find(str => str.startsWith("A"));
console.log(firstA);

// 3.
let users = [{name: "Tom", age: 25}, {name: "Alice", age: 35}, {name: "Bob", age: 29}];
let userOver30 = users.find(u => u.age > 30);
console.log(userOver30);

// 4.
let words = ["hi", "world", "amazing", "yes"];
let longWord = words.find(w => w.length > 5);
console.log(longWord);

// 5.
let products = [{name: "Pen", price: 5}, {name: "Book", price: 25}, {name: "Pencil", price: 15}];
let cheapProduct = products.find(p => p.price < 20);
console.log(cheapProduct);

// 6.
let students = [{name: "John", grade: "B"}, {name: "Sara", grade: "A"}, {name: "Mike", grade: "C"}];
let studentA = students.find(s => s.grade === "A");
console.log(studentA);

// 7.
let nums = [3, 5, -2, 8];
console.log(nums.findIndex(n => n < 0));

// 8.
let verbs = ["play", "running", "eat", "swimming"];
console.log(verbs.findIndex(v => v.endsWith("ing")));

// 9.
let users2 = [{name: "Tom", isActive: false}, {name: "Lucy", isActive: true}, {name: "Sam", isActive: false}];
console.log(users2.findIndex(u => u.isActive));

// 10.
let numbers = [3, 7, 20, 33];
console.log(numbers.findIndex(n => n % 10 === 0));

// 11.
let fruits = ["pear", "apple", "banana"];
console.log(fruits.findIndex(f => f.length === 5));

// 12.
let arr2 = [50, 200, 90, 150];
console.log(arr2.findLast(n => n > 100));

// 13.
let arr3 = ["dog", "apple", "pear", "cat"];
console.log(arr3.findLast(str => str.includes("e")));

// 14.
let users3 = [{age: 30}, {age: 20}, {age: 24}, {age: 40}];
console.log(users3.findLast(u => u.age < 25));

// 15.
let arr4 = [2, 4, 7, 10, 13];
console.log(arr4.findLast(n => n % 2 !== 0));

// 16.
let arr5 = ["cat", "elephant", "dog", "owl"];
console.log(arr5.findLast(w => /^[aeiou]/i.test(w)));

// 17.
let arr6 = [10, 60, 45, 80];
console.log(arr6.findLastIndex(n => n > 50));

// 18.
let arr7 = ["Sun", "Moon", "Star", "Sky"];
console.log(arr7.findLastIndex(str => str.startsWith("S")));

// 19.
let users4 = [{isActive: false}, {isActive: true}, {isActive: true}];
console.log(users4.findLastIndex(u => u.isActive));

// 20.
let arr8 = [4, 9, 12, 14];
console.log(arr8.findLastIndex(n => n % 3 === 0));

// 21.
let arr9 = ["cat", "dogs", "fish", "bird"];
console.log(arr9.findLastIndex(w => w.length === 4));

// 22.
let nums2 = [10, 25, 30];
console.log(nums2.indexOf(25));

// 23.
let fruits2 = ["pear", "apple", "banana"];
console.log(fruits2.indexOf("apple"));

// 24.
let letters = ["b", "a", "c", "a"];
console.log(letters.indexOf("a"));

// 25.
let animals = ["dog", "cat", "lion"];
console.log(animals.indexOf("cat"));

// 26.
let nums3 = [10, 50, 75];
console.log(nums3.indexOf(100));

// 27.
let nums4 = [10, 20, 10, 30];
console.log(nums4.lastIndexOf(10));

// 28.
let fruits3 = ["apple", "banana", "apple"];
console.log(fruits3.lastIndexOf("apple"));

// 29.
let letters2 = ["a", "b", "c", "a"];
console.log(letters2.lastIndexOf("a"));

// 30.
let animals2 = ["dog", "cat", "dog"];
console.log(animals2.lastIndexOf("dog"));

// 31.
let nums5 = [1, 0, -2, 0, 3];
console.log(nums5.lastIndexOf(0));

// 32.
let arr10 = [1, 2, 3];
console.log(arr10.pop());
console.log(arr10);

// 33.
let fruits4 = ["apple", "banana", "pear"];
console.log(fruits4.pop());

// 34.
let arr11 = [5, 10, 15];
while(arr11.length) {
  console.log(arr11.pop());
}

// 35.
let users5 = [{id:1}, {id:2}, {id:3}];
console.log(users5.pop());

// 36.
let arr12 = [10, 20, 30];
let removed = arr12.pop();
console.log(removed);

// 37.
let arr13 = [1, 2, 3, 4, 5];
arr13.splice(0, 2);
console.log(arr13);

// 38.
let fruits5 = ["apple", "banana", "pear"];
fruits5.splice(2, 0, "orange", "grape");
console.log(fruits5);

// 39.
let arr14 = ["a", "b", "c", "d", "e"];
arr14.splice(3, 1, "mango");
console.log(arr14);

// 40.
let arr15 = [1, 2, 3, 4, 5, 6];
arr15.splice(-3);
console.log(arr15);

// 41.
let arr16 = [1, 2, 4, 5];
arr16.splice(2, 0, 3);
console.log(arr16);