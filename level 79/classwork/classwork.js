const images = document.querySelectorAll("img");

for (let i = 0; i < images.length; i++) {
  // We want the first image only
  if (i === 0) {
    images[i].src = "https://via.placeholder.com/200";  // Example new URL
    break;  // Stop the loop after the first image is changed
  }
}