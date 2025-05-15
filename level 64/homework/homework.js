// 2. Favorite hobby
const hobby = prompt("What is your favorite hobby?");
alert("Your favorite hobby is: " + hobby);

// 3. First and last name
const firstName = prompt("Enter your first name:");
const lastName = prompt("Enter your last name:");
const fullName = firstName + " " + lastName;
alert("Your full name is: " + fullName);

// 4. Update <p> with user message
const message = prompt("Enter a message to display on the page:");
document.getElementById("messagePara").textContent = message;

// 5. Favorite emoji
const emoji = prompt("What's your favorite emoji?");
alert("Thanks! You chose: " + emoji);

// Set page title to user word
const titleWord = prompt("Enter a word to set as the page title:");
document.title = titleWord;

// 6. Alert input value
document.getElementById("alertButton").addEventListener("click", function () {
  const inputVal = document.getElementById("alertInput").value;
  alert("You entered: " + inputVal);
});

// 7. Change background color
document.getElementById("colorForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const color = document.getElementById("bgColorInput").value;
  document.body.style.backgroundColor = color;
});

// 8. Display full name in <h1>
document.getElementById("nameButton").addEventListener("click", function () {
  const fname = document.getElementById("firstNameInput").value;
  const lname = document.getElementById("lastNameInput").value;
  document.getElementById("fullNameDisplay").textContent = fname + " " + lname;
});