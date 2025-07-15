//  Homework 2: Filter Positive Numbers from Array
const showPositives = (arr) => {
  for (let num of arr) {
    if (num < 0) continue;
    console.log(num);
  }
};

//  Homework 3: Find First Word With More Than 5 Letters
const findLongWord = (words) => {
  for (let word of words) {
    if (word.length > 5) {
      console.log(word);
      break;
    }
  }
};

//  Homework 4: Sum Numbers Until a Negative Is Found
const sumUntilNegative = (arr) => {
  let sum = 0;
  for (let num of arr) {
    if (num < 0) break;
    sum += num;
  }
  console.log(sum);
};

//  Homework 5: Show Numbers Except Multiples of 3
const skipMultiplesOf3 = () => {
  for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0) continue;
    console.log(i);
  }
};

//  Homework 6: Count How Many Words Start with "A"
const countAWords = (words) => {
  let count = 0;
  for (let word of words) {
    if (word.length < 1) continue;
    if (word[0] === 'A' || word[0] === 'a') {
      count++;
    }
  }
  console.log(count);
};

//  Homework 7: Print Numbers Between 1–30 But Skip Multiples of 4 and 6
const skipMultiplesOf4And6 = () => {
  for (let i = 1; i <= 30; i++) {
    if (i % 4 === 0 || i % 6 === 0) continue;
    console.log(i);
  }
};

//  Homework 8: Find First Name Longer Than 8 Characters
const findLongName = (names) => {
  for (let name of names) {
    if (name.length > 8) {
      console.log(name);
      break;
    }
  }
};

//  Homework 9: Print Only Odd Numbers From an Array
const printOdds = (arr) => {
  for (let num of arr) {
    if (num % 2 === 0) continue;
    console.log(num);
  }
};

//  Homework 10: Sum Only Positive Even Numbers From an Array
const sumPositiveEvens = (arr) => {
  let sum = 0;
  for (let num of arr) {
    if (num <= 0 || num % 2 !== 0) continue;
    sum += num;
  }
  console.log(sum);
};