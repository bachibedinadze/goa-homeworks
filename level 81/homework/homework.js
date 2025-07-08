let i = 1;
do {
  console.log(i);
  i++;
} while (i <= 5);

let j = 2;
do {
  console.log(j);
  j += 2;
} while (j <= 10);

let k = 10;
do {
  console.log(k);
  k--;
} while (k >= 1);

let number;
do {
  number = parseInt(prompt("Enter a number greater than 100:"));
} while (number <= 100);

let sum = 0;
let n = 1;
do {
  sum += n;
  n++;
} while (n <= 10);
console.log("Sum from 1 to 10:", sum);

let numbers = [1, 2, 3, 4, 5];
for (let num of numbers) {
  console.log(num);
}

let text = "Hello";
for (let char of text) {
  console.log(char);
}

let total = 0;
for (let num of numbers) {
  total += num;
}
console.log("Total sum:", total);

for (let num of numbers) {
  if (num % 2 === 0) {
    console.log(num);
  }
}

let names = ["Alice", "Bob", "Charlie"];
for (let name of names) {
  console.log(name);
}

let person = {
  name: "John",
  age: 30,
  job: "Developer"
};

for (let key in person) {
  console.log(key);
}

for (let key in person) {
  console.log(person[key]);
}

let count = 0;
for (let key in person) {
  count++;
}
console.log(count);

let keyToCheck = "age";
let found = false;
for (let key in person) {
  if (key === keyToCheck) {
    found = true;
    break;
  }
}
console.log(found);

let keyList = "";
for (let key in person) {
  keyList += key + ", ";
}
console.log(keyList.slice(0, -2));