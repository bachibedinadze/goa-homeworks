function calculate() {
  let val1 = prompt("Enter first decimal number (e.g., 12.5):");
  let val2 = prompt("Enter second decimal number (e.g., 7.9):");

  let sumInt = parseInt(val1) + parseInt(val2);
  let sumFloat = parseFloat(val1) + parseFloat(val2);

  let comparison = (sumInt === sumFloat);

  document.getElementById("output").innerHTML =
    "Sum with parseInt(): " + sumInt + "<br>" +
    "Sum with parseFloat(): " + sumFloat + "<br>" +
    "Are they strictly equal (===)? " + comparison;
}