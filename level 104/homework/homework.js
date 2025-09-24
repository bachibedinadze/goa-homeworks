// --- Student Management System ---
let students = [];

function addStudent() {
  let name = document.getElementById("studentName").value;
  if (name.trim() === "") {
    alert("Enter student name!");
    return;
  }
  students.push(name);
  document.getElementById("studentName").value = "";
  renderStudents();
}

function renderStudents() {
  let list = document.getElementById("studentList");
  list.innerHTML = "";
  students.forEach((student, index) => {
    let li = document.createElement("li");
    li.innerHTML = `${student} <button onclick="removeStudent(${index})">Remove</button>`;
    list.appendChild(li);
  });
}

function removeStudent(index) {
  students.splice(index, 1);
  renderStudents();
}

// --- Classes ---

class Teacher {
  constructor(name, subject) {
    this.name = name;
    this.subject = subject;
  }
  introduce() {
    console.log(`Hello, I am ${this.name} and I teach ${this.subject}.`);
  }
}

class Phone {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }
  ring() {
    console.log(`The ${this.brand} ${this.model} is ringing!`);
  }
}

class Movie {
  constructor(title, year) {
    this.title = title;
    this.year = year;
  }
  play() {
    console.log(`Now playing: ${this.title} (${this.year})`);
  }
}

class Cat {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
  meow() {
    console.log(`${this.name} the ${this.color} cat says Meow!`);
  }
}

class BankCard {
  constructor(cardNumber, balance) {
    this.cardNumber = cardNumber;
    this.balance = balance;
  }
  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      console.log(`Withdrawn: ${amount}. New balance: ${this.balance}`);
    } else {
      console.log("Insufficient balance!");
    }
  }
}

// --- Demo Function ---
function demoClasses() {
  console.log("=== Teacher Demo ===");
  let t1 = new Teacher("John", "Math");
  t1.introduce();

  console.log("=== Phone Demo ===");
  let p1 = new Phone("Apple", "iPhone 14");
  p1.ring();

  console.log("=== Movie Demo ===");
  let m1 = new Movie("Inception", 2010);
  m1.play();

  console.log("=== Cat Demo ===");
  let c1 = new Cat("Murka", "black");
  c1.meow();

  console.log("=== BankCard Demo ===");
  let card1 = new BankCard("1234-5678-9012-3456", 500);
  card1.withdraw(200);
  card1.withdraw(400);
}