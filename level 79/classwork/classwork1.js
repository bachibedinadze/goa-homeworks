for (let i = 0; i < 5; i++) {
  const div = document.createElement("div");
  div.className = "moving-box";
  div.style.width = "50px";
  div.style.height = "50px";
  div.style.background = "teal";  // ერთნაირი ფერი
  div.style.borderRadius = "10px"; // მომრგვალებული კუთხეები
  div.style.position = "relative"; // საჭიროა მარცხნივ გადაადგილებისთვის
  div.style.margin = "10px";
  document.body.appendChild(div);
}

// ანიმაცია ყველა დივისთვის
const boxes = document.querySelectorAll(".moving-box");
boxes.forEach(box => {
  let left = 0;
  setInterval(() => {
    left += 5;
    box.style.left = left + "px";
  }, 200);
});