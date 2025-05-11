function greet() {
  const paragraph = document.getElementById("welcomePara");
  const name = "ბაჩი";
  paragraph.textContent = `Welcome ${name}!`;
}

document.addEventListener("DOMContentLoaded", function () {
  const para = document.getElementById("welcomePara");

  if (para) {
    para.addEventListener("click", greet);
  }
});