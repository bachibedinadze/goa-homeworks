// ღილაკისა და დივის შექმნა
const button = document.createElement("button");
button.textContent = "დაწყება";
document.body.appendChild(button);

const box = document.createElement("div");
box.style.width = "150px";
box.style.height = "150px";
box.style.background = "blue";
box.style.margin = "10px";
document.body.appendChild(box);

button.addEventListener("click", () => {
  // ფერის შეცვლა
  box.style.background = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  // ზომების მიცემა (დავადგინოთ საწყისი ზომა)
  let width = 150;
  let height = 150;

  let pCount = 0;

  // დავიწყოთ ინტერვალი
  const interval = setInterval(() => {
    // <p> თეგების შექმნა
    pCount++;
    const p = document.createElement("p");
    const pText = document.createTextNode(`p${pCount}`);
    p.appendChild(pText);
    document.body.appendChild(p);

    // ზომების შემცირება
    width -= 10;
    height -= 10;

    if (width > 0 && height > 0) {
      box.style.width = width + "px";
      box.style.height = height + "px";
    } else {
      // როცა ზომა ნულამდე მივა ან უარყოფით გახდება, გავაქროთ დივი და გავაჩეროთ ინტერვალი
      box.style.display = "none";
      clearInterval(interval);
    }
  }, 3000);

  // OPTIONAL: p თეგების შექმნის მაგალითი for ციკლით (თუ ერთდროულად გინდა დაამატო N ცალი p)
  /*
  for (let i = 1; i <= 5; i++) {
    const p = document.createElement("p");
    const text = document.createTextNode(`p${i}`);
    p.appendChild(text);
    document.body.appendChild(p);
  }
  */
});