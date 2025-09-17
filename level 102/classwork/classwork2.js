function formatTime(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  return `${year}-${month}-${day}, ${hours}-${minutes}-${seconds}`;
}

let counter = 0;
const interval = setInterval(() => {
  const now = new Date();
  console.log(formatTime(now));
  counter++;
  if (counter >= 60) {
    clearInterval(interval);
  }
}, 1000);