function modifyDivContent() {
  const div = document.getElementById("myDiv");

  const button = div.querySelector("button");
  if (button) {
    button.remove();
  }

  const paragraph = div.querySelector("p");
  if (paragraph) {
    const italic = document.createElement("i");
    italic.textContent = "შეცვლილი ტექსტი i თეგში";
    div.replaceChild(italic, paragraph);
  }
}

window.onload = modifyDivContent;