import square from './square.js';
import isEven from './isEven.js';

const number = 5;

const squared = square(number);

const result = isEven(squared);

console.log(`რიცხვი ${number}² (${squared}) არის ლუწი? → ${result}`);