// 2
function task2() {
  let exp = prompt("Enter a math expression (e.g., 5+3):");
  alert("Result: " + eval(exp));
}

// 3
function task3() {
  let exp = prompt("Enter an expression with parentheses (e.g., (8+2)*3):");
  alert("Result: " + eval(exp));
}

// 4
function task4() {
  let exp = prompt("Enter a division (e.g., 100/4):");
  alert("Result: " + eval(exp));
}

// 5
function task5() {
  let num = prompt("Enter a number:");
  alert("Square: " + eval(num + "*" + num));
}

// 6
function task6() {
  let exp = "20-7";
  alert("Expression: " + exp + " = " + eval(exp));
}

// 7
function task7() {
  let val = prompt("Enter something:");
  if (isNaN(val)) alert("Not a number");
  else alert("It is a number");
}

// 8
function task8() {
  let age = prompt("Enter your age:");
  if (isNaN(age)) alert("Invalid age");
  else alert("Valid age");
}

// 9
function task9() {
  let v1 = prompt("Enter first value:");
  let v2 = prompt("Enter second value:");
  alert("First: " + (isNaN(v1) ? "Not a number" : "Number") +
        "\nSecond: " + (isNaN(v2) ? "Not a number" : "Number"));
}

// 10
function task10() {
  let input = prompt("Type anything:");
  if (isNaN(input)) alert("That is text");
  else alert("That is a number");
}

// 11
function task11() {
  let n1 = prompt("Enter first number:");
  let n2 = prompt("Enter second number:");
  let op = prompt("Enter operator (+, -, *, /):");
  if (isNaN(n1) || isNaN(n2)) {
    alert("Invalid numbers");
  } else {
    alert("Result: " + eval(n1 + op + n2));
  }
}

// 12
function task12() {
  let str = prompt("Enter a whole number as a string (e.g., '25'):");
  alert("Converted: " + parseInt(str));
}

// 13
function task13() {
  let a = prompt("Enter first whole number as string:");
  let b = prompt("Enter second whole number as string:");
  alert("Sum: " + (parseInt(a) + parseInt(b)));
}

// 14
function task14() {
  let str = prompt('Enter "55px":');
  alert("Extracted number: " + parseInt(str));
}

// 15
function task15() {
  let a = prompt('Enter "20px":');
  let b = prompt('Enter "15.9":');
  alert("Sum: " + (parseInt(a) + parseInt(b)));
}

// 16
function task16() {
  let str = prompt('Enter "0xF":');
  alert("Converted: " + parseInt(str));
}

// 17
function task17() {
  let p1 = prompt("Enter first item price (e.g., 19.99):");
  let p2 = prompt("Enter second item price (e.g., 5.50):");
  let total = parseFloat(p1) + parseFloat(p2);
  alert("Total: " + total.toFixed(2));
}

// 18
function task18() {
  let bill = prompt("Enter bill amount (e.g., 45.75):");
  let tipPercent = prompt("Enter tip percentage (e.g., 15):");
  let billVal = parseFloat(bill);
  let tipVal = billVal * (parseFloat(tipPercent) / 100);
  let total = billVal + tipVal;
  alert("Tip: " + tipVal.toFixed(2) + "\nTotal: " + total.toFixed(2));
}

// 19
function task19() {
  let c = prompt("Enter temperature in Celsius (e.g., 36.6):");
  let f = (parseFloat(c) * 9/5) + 32;
  alert(c + " °C = " + f.toFixed(1) + " °F");
}

// 20
function task20() {
  let weight = prompt("Enter weight in kg (e.g., 70.5):");
  let height = prompt("Enter height in meters (e.g., 1.75):");
  let bmi = parseFloat(weight) / (parseFloat(height) * parseFloat(height));
  alert("Your BMI: " + bmi.toFixed(2));
}

// 21
function task21() {
  let distance = prompt("Enter distance traveled in km (e.g., 350.7):");
  let fuel = prompt("Enter fuel used in liters (e.g., 28.5):");
  let efficiency = parseFloat(distance) / parseFloat(fuel);
  alert("Fuel efficiency: " + efficiency.toFixed(2) + " km/l");
}