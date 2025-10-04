const coinFlip = new Promise((resolve, reject) => {
  const result = Math.random() < 0.5 ? "Heads" : "Tails";

  if (result === "Heads") {
    resolve("Heads");
  } else {
    reject("Tails");
  }
});

coinFlip
  .then((result) => console.log("Coin flip result:", result))
  .catch((error) => console.log("Coin flip result:", error));