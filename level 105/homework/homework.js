// 2-6) Object.keys()

// Create an object with at least 5 key-value pairs
const person = {
  name: "Alice",
  age: 25,
  city: "New York",
  job: "Developer",
  isStudent: false
};

// Use Object.keys() to list all the keys
console.log("Keys:", Object.keys(person));

// Count how many keys are in a given object
console.log("Number of keys:", Object.keys(person).length);

// Function: return array of keys in uppercase
function keysToUppercase(obj) {
  return Object.keys(obj).map(key => key.toUpperCase());
}
console.log("Uppercase keys:", keysToUppercase(person));

// Check if a specific key exists
const keyToCheck = "age";
console.log(`Does key "${keyToCheck}" exist?`, Object.keys(person).includes(keyToCheck));

// Nested object, extract only top-level keys
const nestedObj = {
  user: { name: "Alice", age: 25 },
  settings: { theme: "dark" },
  loggedIn: true
};
console.log("Top-level keys:", Object.keys(nestedObj));


// 7-11) Object.values()

// Create an object with at least 5 key-value pairs
const product = {
  id: 101,
  name: "Laptop",
  price: 1200,
  stock: 50,
  category: "Electronics"
};

// Use Object.values() to list all values
console.log("Values:", Object.values(product));

// Count how many values
console.log("Number of values:", Object.values(product).length);

// Function: return only numeric values
function getNumericValues(obj) {
  return Object.values(obj).filter(value => typeof value === "number");
}
console.log("Numeric values:", getNumericValues(product));

// Find sum of all numeric values
const sum = getNumericValues(product).reduce((acc, val) => acc + val, 0);
console.log("Sum of numeric values:", sum);

// Check if a certain value exists
const valueToCheck = "Laptop";
console.log(`Does value "${valueToCheck}" exist?`, Object.values(product).includes(valueToCheck));


// 12-16) Object.entries()

// Create object with 5 key-value pairs
const car = {
  brand: "Tesla",
  model: "Model 3",
  year: 2023,
  color: "Red",
  price: 40000
};

// Use Object.entries() to list all [key, value] pairs
console.log("Entries:", Object.entries(car));

// Function: print key: value format
function printEntries(obj) {
  Object.entries(obj).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
  });
}
printEntries(car);

// Convert entries into array of "key=value"
const keyValueStrings = Object.entries(car).map(([key, value]) => `${key}=${value}`);
console.log("Key=Value array:", keyValueStrings);

// Filter object by values > 10
function filterGreaterThan10(obj) {
  return Object.fromEntries(Object.entries(obj).filter(([key, value]) => value > 10));
}
console.log("Filtered (>10):", filterGreaterThan10(car));

// Swap keys and values
function swapKeysAndValues(obj) {
  return Object.fromEntries(Object.entries(obj).map(([key, value]) => [value, key]));
}
console.log("Swapped:", swapKeysAndValues(car));


// 17-21) Checking properties

// Make object with 3 properties
const book = {
  title: "1984",
  author: "George Orwell",
  year: 1949
};

// Check if one property exists
console.log("Has 'author'?", "author" in book);

// Check non-existing property
console.log("Has 'publisher'?", "publisher" in book);

// Test if "toString" is own property
console.log("Has own 'toString'?", book.hasOwnProperty("toString")); // false, comes from prototype

// Add new property and check with Object.hasOwn()
book.genre = "Dystopian";
console.log("Has own 'genre'?", Object.hasOwn(book, "genre"));

// Delete a property and confirm
delete book.year;
console.log("After deletion, has 'year'?", Object.hasOwn(book, "year"));