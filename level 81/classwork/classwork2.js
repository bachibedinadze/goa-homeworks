let myArray = ["hello", "world", 5, 10, true, false];

for (let item of myArray) {
  if (typeof item === "string") {
    console.log(item);
  } else if (typeof item === "number") {
    console.log(item + 10);
  } else if (typeof item === "boolean") {
    console.log(!item);
  }
}