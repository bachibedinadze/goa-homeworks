let num1 = 5;
let num2 = 5;
console.log(num1 == num2);

let a = 10;
let b = 7;
console.log(a > b);

let c = 3;
let d = 5;
console.log(c <= d);

let x = 8;
let y = 10;
console.log(x != y);

let z = 120;
console.log(z >= 100);

let result = confirm("Do you agree?");
console.log(result);

document.getElementById("confirmBtn").addEventListener("click", function() {
  let userConfirmed = confirm("Are you sure?");
  console.log("User confirmed:", userConfirmed);
});

window.onload = function() {
  let confirmed = confirm("Do you want to continue?");
  alert("Confirmation result: " + confirmed);
};

document.getElementById("userForm").addEventListener("submit", function(e) {
  e.preventDefault();
  console.log(this.username.value);
});

document.getElementById("clearEmail").addEventListener("click", function() {
  document.querySelector('[name="email"]').value = "";
});

document.getElementById("showPhone").addEventListener("click", function() {
  let phoneValue = document.querySelector('[name="phone"]').value;
  alert("Phone: " + phoneValue);
});