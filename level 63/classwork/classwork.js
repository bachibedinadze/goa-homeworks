function changeTextAlignmentById(elementId) {
  const element = document.getElementById(elementId);

  if (element) {
    // თუ უკვე ცენტრირებულია, დააბრუნე მარცხენა განლაგება და პირიქით
    if (element.style.textAlign === "center") {
      element.style.textAlign = "left";
    } else {
      element.style.textAlign = "center";
    }
  } else {
    console.warn("ელემენტი არ მოიძებნა ID-ით:", elementId);
  }
}

// დავუკავშიროთ ღილაკის ფუნქცია ელემენტს
document.addEventListener("DOMContentLoaded", function () {
  const myElement = document.getElementById("myElement");

  if (myElement) {
    myElement.addEventListener("click", function () {
      changeTextAlignmentById("myElement");
    });
  }
});