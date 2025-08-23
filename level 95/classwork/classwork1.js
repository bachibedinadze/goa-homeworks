// 1) Replace "cat" with "dog" in "The cat is sleeping"
const text1 = "The cat is sleeping";
const result1 = text1.replace("cat", "dog");
console.log('1) ' + result1);
document.getElementById('res1').textContent = result1;

// 2) Replace the first occurrence of "a" with "@" in "banana"
const text2 = "banana";
const result2 = text2.replace("a", "@"); // replaces only first "a"
console.log('2) ' + result2);
document.getElementById('res2').textContent = result2;

// 3) Replace "world" with "JavaScript" in "Hello world"
const text3 = "Hello world";
const result3 = text3.replace("world", "JavaScript");
console.log('3) ' + result3);
document.getElementById('res3').textContent = result3;