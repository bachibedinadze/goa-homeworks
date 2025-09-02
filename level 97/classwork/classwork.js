function allStrings(arr) {
  return arr.every(item => typeof item === "string");
}

// Example usage
console.log(allStrings(["hello", "world"]));       // true
console.log(allStrings(["hello", 123, "world"])); // false
console.log(allStrings([]));                      // true (empty array passes)