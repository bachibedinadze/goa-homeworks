const paragraph = document.getElementById("myParagraph");


function centerText() {
  paragraph.style.textAlign = "center";
}

paragraph.onmouseover = centerText;