function checkValues() {
  let value1 = prompt("Enter first value:");
  let value2 = prompt("Enter second value:");

  if (isNaN(value1)) {
    console.log("First value: Is not a number");
  } else {
    console.log("First value: Is number");
  }

  if (isNaN(value2)) {
    console.log("Second value: Is not a number");
  } else {
    console.log("Second value: Is number");
  }
}