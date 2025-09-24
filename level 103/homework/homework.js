/* 1. Dynamic Calendar */
function updateCalendar() {
  let now = new Date();
  document.getElementById("calendar").innerText = now.toLocaleString();
}
setInterval(updateCalendar, 1000);
updateCalendar();

/* 2. Dice */
function rollDice() {
  let dice = Math.floor(Math.random() * 6) + 1;
  document.getElementById("dice").innerText = "გაიგორა: " + dice;
}

/* 3. Random Fruit */
function pickFruit() {
  let fruits = ["ვაშლი", "მსხალი", "ბანანი", "ატამი"];
  let randomFruit = fruits[Math.floor(Math.random() * fruits.length)];
  document.getElementById("fruit").innerText = "შენ მიიღე: " + randomFruit;
}

/* 4. Random Password */
function generatePassword(length = 8) {
  let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let pass = "";
  for (let i = 0; i < length; i++) {
    pass += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return pass;
}
function showPassword() {
  document.getElementById("password").innerText = generatePassword();
}

/* 5. Current Month */
let months = ["იანვარი","თებერვალი","მარტი","აპრილი","მაისი","ივნისი","ივლისი","აგვისტო","სექტემბერი","ოქტომბერი","ნოემბერი","დეკემბერი"];
let now = new Date();
document.getElementById("month").innerText = "მიმდინარე თვე: " + months[now.getMonth()];

/* 6. Current Day */
let days = ["კვირა","ორშაბათი","სამშაბათი","ოთხშაბათი","ხუთშაბათი","პარასკევი","შაბათი"];
document.getElementById("day").innerText = "დღეს არის: " + days[now.getDay()];

/* 7. Birthday Countdown */
function checkBirthday() {
  let input = document.getElementById("bdayInput").value;
  if (!input) {
    document.getElementById("bday").innerText = "გთხოვ, შეიყვანე თარიღი.";
    return;
  }
  let now = new Date();
  let bday = new Date(input);

  bday.setFullYear(now.getFullYear());
  if (bday < now) {
    bday.setFullYear(now.getFullYear() + 1);
  }

  let diff = Math.ceil((bday - now) / (1000 * 60 * 60 * 24));
  document.getElementById("bday").innerText = "დარჩა დღე: " + diff;
}

/* 8. Stopwatch */
let startTime, endTime;
function start() {
  startTime = Date.now();
}
function stop() {
  endTime = Date.now();
  let seconds = ((endTime - startTime) / 1000).toFixed(2);
  document.getElementById("result").innerText = "გასული დრო: " + seconds + " წამი";
}

/* 9. Random Color */
function randomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let color = `rgb(${r}, ${g}, ${b})`;
  document.getElementById("color").innerText = color;
  document.body.style.background = color;
}