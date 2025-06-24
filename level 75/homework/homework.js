// 1. Log numbers from 1 to 5 every second, then stop
let count = 1;
let interval1 = setInterval(() => {
  console.log(count);
  count++;
  if (count > 5) clearInterval(interval1);
}, 1000);

// 2. Display a message every 2 seconds, stop after 10 seconds
let interval2 = setInterval(() => {
  console.log("Hello every 2 seconds");
}, 2000);

setTimeout(() => {
  clearInterval(interval2);
}, 10000);

// 3. Change background color every 3 seconds, stop after 5 changes
let colors = ["red", "blue", "green", "orange", "purple"];
let index = 0;
let interval3 = setInterval(() => {
  document.body.style.backgroundColor = colors[index];
  index++;
  if (index >= 5) clearInterval(interval3);
}, 3000);

// 4. Display current time every second, stop after 15 seconds
let interval4 = setInterval(() => {
  console.log(new Date().toLocaleTimeString());
}, 1000);

setTimeout(() => {
  clearInterval(interval4);
}, 15000);

// 5. Simple timer counting up to 10 seconds
let seconds = 0;
let interval5 = setInterval(() => {
  seconds++;
  console.log("Timer:", seconds, "seconds");
  if (seconds >= 10) clearInterval(interval5);
}, 1000);

// 6. Array of 4 numbers, log second element
let numbers = [10, 20, 30, 40];
console.log("Second element:", numbers[1]); // Logs 20

// 7. Change first element to 100 and log entire array
numbers[0] = 100;
console.log("Updated array:", numbers); // [100, 20, 30, 40]

// 8. Array of 3 strings, log each using direct indexing
let fruits = ["apple", "banana", "cherry"];
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

// 9. Array of 5 numbers, sum of first and last elements
let nums = [5, 10, 15, 20, 25];
let sum = nums[0] + nums[nums.length - 1];
console.log("Sum of first and last:", sum); // 30