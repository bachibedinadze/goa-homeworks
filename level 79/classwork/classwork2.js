// ღილაკისა და დივის შექმნა
const btn = document.createElement("button");
btn.textContent = "დაწყება";
document.body.appendChild(btn);

const box = document.createElement("div");
box.style.width = "200px";
box.style.height = "200px";
box.style.background = "blue";
box.style.margin = "10px";
box.style.position = "relative";
document.body.appendChild(box);

// ღილაკზე დაჭერის ლოგიკა
btn.addEventListener("click", () => {
  // ფერის შეცვლა
  box.style.background = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  
  // ზომების შემცირების და <p> თეგების შექმნის პროცესის დაწყება
  let pCount = 0;
  let width = parseInt(box.style.width);
  let height = parseInt(box.style.height);
  
  const interval = setInterval(() => {
    // <p> თეგის შექმნა
    pCount++;
    const p = document.createElement("p");
    const pText = document.createTextNode(`p${pCount}`);
    p.appendChild(pText);
    document.body.appendChild(p);
    
    // დივის ზომების შემცირება
    if (width > 0 && height > 0) {
      width -= 10;
      height -= 10;
      box.style.width = width + "px";
      box.style.height = height + "px";
    }

    // როცა ზომები ნულამდე მივა, დავასრულოთ პროცესი
    if (width <= 0 || height <= 0) {
      box.style.display = "none";
      clearInterval(interval);
    }
  }, 3000); // ყოველ 3 წამში
});