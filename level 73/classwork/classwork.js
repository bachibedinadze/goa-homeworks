function addNewElement() {
  const myDiv = document.getElementById("myDiv");
  const button = document.createElement("button");
  button.textContent = "დაამატე ელემენტი";
  myDiv.appendChild(button);
}

addNewElement();