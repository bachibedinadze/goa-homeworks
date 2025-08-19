let str1 = "Hello";
let str2 = "World";
let result1 = str1.concat(str2);
console.log(result1);

let str3 = "JavaScript";
let result2 = str1.concat(" ", str2, " ", str3);
console.log(result2);

let result3 = str1.concat(" ", str2);
console.log(result3);

document.getElementById("output").textContent =
  result1 + "\n" + result2 + "\n" + result3;