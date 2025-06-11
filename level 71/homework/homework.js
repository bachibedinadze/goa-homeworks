// Homework 1: Array Basics
let fruits = ["apple", "banana", "cherry", "mango", "grape"];
console.log("First fruit:", fruits[0]);
console.log("Last fruit:", fruits[fruits.length - 1]);
console.log("Total fruits:", fruits.length);

// Homework 2: Modifying Arrays
let colors = ["red", "green", "blue"];
colors.push("yellow");           // Add to end
colors.shift();                  // Remove first
colors.unshift("purple");        // Add to beginning
console.log("Modified colors:", colors);

// Homework 3: Loop Through an Array
let numbers = [2, 3, 4];
for (let i = 0; i < numbers.length; i++) {
  console.log("Doubled:", numbers[i] * 2);
}

// Homework 4: Sum Array Function
function sumArray(arr) {
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  return sum;
}
console.log("Sum of array:", sumArray([1, 2, 3]));

// Homework 5: Find the Largest Number
function findLargest(arr) {
  let max = arr[0];
  for (let num of arr) {
    if (num > max) {
      max = num;
    }
  }
  return max;
}
console.log("Largest number:", findLargest([4, 9, 1, 17, 3]));

// Homework 6: Array Includes Check
let favoriteMovies = ["Inception", "Matrix", "Interstellar", "Avengers", "Joker"];
let userMovie = prompt("Enter a movie name:");
if (favoriteMovies.includes(userMovie)) {
  alert("Yes, it's one of my favorites!");
} else {
  alert("No, I don't like that one much.");
}

// Homework 7: Join and Sort
let words = ["banana", "apple", "pear", "orange"];
words.sort();
let result = words.join(", ");
console.log("Sorted words:", result);  // Output: "apple, banana, orange, pear"

// Homework 8: Random Number Generator
function getRandom1to10() {
  return Math.floor(Math.random() * 10) + 1;
}
console.log("Random number 1-10:", getRandom1to10());

// Homework 9: Round a Number
let userInput = parseFloat(prompt("Enter a decimal number:"));
console.log("Rounded down:", Math.floor(userInput));
console.log("Rounded up:", Math.ceil(userInput));
console.log("Rounded to nearest:", Math.round(userInput));

// Homework 10: Find Max and Min
let nums = [12, 5, 23, 1, 17];
console.log("Max number:", Math.max(...nums));
console.log("Min number:", Math.min(...nums));