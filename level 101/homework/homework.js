// 2-6
let nums = [1, 2, 3, 4, 5];
console.log(nums.reverse());

let fruits = ["apple", "banana", "cherry"];
console.log(fruits.reverse()[0]);

let chars = ["o", "l", "l", "e", "h"];
console.log(chars.reverse().join(""));

let numbers = [10, 50, 20, 5, 100];
let reversedNumbers = numbers.slice().reverse();
console.log(Math.max(...reversedNumbers));

let arr = [1, 2, 3, 4];
console.log(arr.reverse().join(","));

// 7-11
let fruits2 = ["apple", "banana", "cherry"];
fruits2.shift();
console.log(fruits2);

let nums2 = [1, 2, 3, 4];
nums2.shift();
console.log(nums2);

let arr2 = ["first", "second", "third"];
let removed = arr2.shift();
console.log(removed);

let arr3 = [10, 20, 30];
while (arr3.length > 0) {
  console.log(arr3.shift());
}

let mixed = [42, "hello", true];
mixed.shift();
console.log(mixed);

// 12-16
let fruits3 = ["apple", "banana", "cherry"];
console.log(fruits3.join(","));

let nums3 = [1, 2, 3, 4];
console.log(nums3.join(" "));

let words = ["hello", "world", "js"];
console.log(words.join("-"));

let chars2 = ["h", "e", "l", "l", "o"];
console.log(chars2.join(""));

let names = ["Alice", "Bob", "Charlie"];
console.log(names.join(" | "));

// 18-22
console.log(Math.abs(5));
console.log(Math.abs(-7));
let arrAbs = [-1, -5, 3, 7];
console.log(arrAbs.map(Math.abs));
let a = 10, b = 25;
console.log(Math.abs(a - b));
let num = -15;
console.log(Math.abs(num));

// 23-27
console.log(Math.ceil(4.2));
console.log(Math.ceil(-4.8));
let decimals1 = [1.2, 3.7, -2.3];
console.log(decimals1.map(Math.ceil));
console.log(Math.ceil(7 / 2));
let price = 19.99, taxRate = 0.08;
console.log(Math.ceil(price * (1 + taxRate)));

// 28-32
console.log(Math.floor(4.9));
console.log(Math.floor(-4.1));
let decimals2 = [1.9, 3.1, -2.7];
console.log(decimals2.map(Math.floor));
console.log(Math.floor(7 / 2));
let price2 = 50, discount = 0.15;
console.log(Math.floor(price2 * (1 - discount)));

// 33-37
console.log(Math.round(4.6));
console.log(Math.round(-4.6));
let decimals3 = [1.2, 3.5, 4.7];
console.log(decimals3.map(Math.round));
console.log(Math.round(7 / 2));
let price3 = 29.99, tax = 0.07;
console.log(Math.round(price3 * (1 + tax)));

// 38-42
console.log(Math.max(10, 20));
console.log(Math.max(5, 12, 8));
let nums1 = [3, 7, 2, 9, 5];
function manualMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  return max;
}
console.log(manualMax(nums1));
let positives = [4, 10, 25, 8];
console.log(Math.max(...positives));
let mixedNums1 = [-10, -3, 7, 2, -25, 30];
console.log(Math.max(...mixedNums1));

// 43-47
console.log(Math.min(10, 20));
console.log(Math.min(5, 12, 8));
let nums2b = [3, 7, 2, 9, 5];
function manualMin(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
  }
  return min;
}
console.log(manualMin(nums2b));
let positives2 = [4, 10, 25, 8];
console.log(Math.min(...positives2));
let mixedNums2 = [-10, -3, 7, 2, -25, 30];
console.log(Math.min(...mixedNums2));

// 48-54
console.log(Math.pow(2, 3));
console.log(Math.pow(5, 0.5));
let numCube = 4;
console.log(Math.pow(numCube, 3));
let base = 7, exp = 2;
console.log(Math.pow(base, exp));
let nums3b = [1, 2, 3, 4, 5];
console.log(nums3b.map(n => Math.pow(n, 2)));
console.log(Math.trunc(12.987));
console.log(Math.trunc(-45.67));
console.log(Math.floor(-45.67));