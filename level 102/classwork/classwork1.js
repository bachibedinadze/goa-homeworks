const paragraph = document.getElementById("day");
const button = document.getElementById("btn");

const days = [
  "კვირა",
  "ორშაბათი",
  "სამშაბათი",
  "ოთხშაბათი",
  "ხუთშაბათი",
  "პარასკევი",
  "შაბათი"
];

button.addEventListener("click", () => {
  const today = new Date();
  const dayIndex = today.getDay();
  paragraph.textContent = days[dayIndex];
});