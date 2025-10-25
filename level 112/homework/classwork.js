// 3. Check Even or Odd
let num = 7;
let result = (num % 2 === 0) ? "Even" : "Odd";
console.log("3. Even or Odd:", result);

// 4. Find the Greater Number
let a = 10, b = 25;
let greater = (a > b) ? a : b;
console.log("4. Greater number:", greater);

// 5. Check Voting Eligibility
let age = 16;
let eligibility = (age >= 18) ? "Eligible" : "Not Eligible";
console.log("5. Voting eligibility:", eligibility);

// 6. Assign Grade
let score = 45;
let grade = (score >= 50) ? "Pass" : "Fail";
console.log("6. Grade:", grade);

// 7. Check for Positive, Negative, or Zero
let number = 0;
let type = (number > 0) ? "Positive"
          : (number < 0) ? "Negative"
          : "Zero";
console.log("7. Number type:", type);

// 8. Merge Arrays (Spread Operator)
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let merged = [...arr1, ...arr2];
console.log("8. Merged array:", merged);

// 9. Copy and Modify an Object (Spread Operator)
let person = { name: "Alice", age: 25 };
let updatedPerson = { ...person, age: 30 };
console.log("9. Original object:", person);
console.log("9. Updated object:", updatedPerson);

// 10. Sum of Numbers (Rest Operator)
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
console.log("10. Sum:", sum(10, 20, 30, 40));

// 11. Extract Remaining Properties (Rest in Destructuring)
const student = { name: "John", age: 20, grade: "A", city: "Delhi" };
const { name, ...others } = student;
console.log("11. Name:", name);
console.log("11. Other properties:", others);

// 12. Export and Import a Function
// ----- greet.js -----
export function greet(name) {
  return `Hello, ${name}!`;
}

// ----- main.js -----
import { greet } from './greet.js';
console.log("12. Greet:", greet("Alice"));

// 13. Export Multiple Values
// ----- mathUtils.js -----
export const PI = 3.14159;
export function area(r) {
  return PI * r * r;
}
export function circumference(r) {
  return 2 * PI * r;
}

// ----- main.js -----
import { PI, area, circumference } from './mathUtils.js';
console.log("13. Area:", area(5));
console.log("13. Circumference:", circumference(5));