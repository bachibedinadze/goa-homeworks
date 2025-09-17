// 2–6: Random & Math


// 2. Random decimal between 0 and 1
function randomDecimal() {
  return Math.random();
}
console.log("2. Random decimal:", randomDecimal());

// 3. Dice roll (1–6)
function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}
console.log("3. Dice roll:", rollDice());

// 4. Coin flip
function flipCoin() {
  return Math.random() < 0.5 ? "Heads" : "Tails";
}
console.log("4. Coin flip:", flipCoin());

// 5. Random 8-character password
function generatePassword() {
  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let pass = "";
  for (let i = 0; i < 8; i++) {
    pass += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return pass;
}
console.log("5. Random password:", generatePassword());

// 6. Random true/false
function randomBoolean() {
  return Math.random() < 0.5;
}
console.log("6. Random boolean:", randomBoolean());



// 7: Random Quote Generator 

const quotes = [
  "Believe in yourself!",
  "Every day is a new beginning.",
  "Keep moving forward.",
  "Stay positive, work hard, make it happen.",
  "Dream big and dare to fail."
];

function randomQuote() {
  const index = Math.floor(Math.random() * quotes.length);
  return quotes[index];
}
console.log("7. Random Quote:", randomQuote());



// Dates setup

const today = new Date();
const birthday = new Date(today.getFullYear(), 6, 15); // Example birthday: July 15
const customDate = new Date("2025-09-17T14:45:00");
const anotherDate = new Date("2025-12-25");


// 8–10: Day of Month

console.log("8. Today’s date number:", today.getDate());
console.log("9. Birthday date number:", birthday.getDate());
console.log("10. Is today the 1st?", today.getDate() === 1);


// 11–13: Weekday

console.log("11. Today’s weekday number:", today.getDay());
console.log("12. Birthday’s weekday number:", birthday.getDay());
console.log("13. Is today Sunday?", today.getDay() === 0);


// 14–16: Year

console.log("14. Current year:", today.getFullYear());
console.log("15. Birthday year:", birthday.getFullYear());
console.log("16. Is today in 2025?", today.getFullYear() === 2025);


// 17–19: Hour

console.log("17. Current hour:", today.getHours());
console.log("18. Hour of custom date:", customDate.getHours());
console.log("19. Is it morning?", today.getHours() < 12);


// 20–22: Minute

console.log("20. Current minute:", today.getMinutes());
console.log("21. Minute of custom date:", customDate.getMinutes());
console.log("22. Is it start of the hour?", today.getMinutes() === 0);


// 23–27: Seconds

console.log("23. Current seconds:", today.getSeconds());

// 25. Seconds of a Date object
function getSeconds(date) {
  return date.getSeconds();
}
console.log("25. Seconds of today:", getSeconds(today));

// 26. Compare seconds of two dates
const d1 = new Date();
const d2 = new Date(d1.getTime() + 5000); // 5 sec later
console.log("26. Same seconds?", d1.getSeconds() === d2.getSeconds());

// 27. Print seconds every second (stop after 5 times to avoid infinite logging)
let secCount = 0;
const secInterval = setInterval(() => {
  console.log("27. Seconds now:", new Date().getSeconds());
  secCount++;
  if (secCount === 5) clearInterval(secInterval);
}, 1000);


// 28–32: Month

console.log("28. Current month:", today.getMonth());

// 30. Month of a Date object
function getMonth(date) {
  return date.getMonth();
}
console.log("30. Month of today:", getMonth(today));

// 31. Compare months
console.log("31. Same month as anotherDate?", today.getMonth() === anotherDate.getMonth());

// 32. Print month every 5 seconds (stop after 3 times to avoid infinite logging)
let monthCount = 0;
const monthInterval = setInterval(() => {
  console.log("32. Current month:", new Date().getMonth());
  monthCount++;
  if (monthCount === 3) clearInterval(monthInterval);
}, 5000);