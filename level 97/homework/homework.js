let date = "2025-08-17".split("-");
console.log(date);

let words = "one two three four five".split(" ");
console.log(words);

let values = "John,Doe,25,Developer".split(",");
console.log(values);

let chars = "abc".split("");
console.log(chars);

let jsWords = "JavaScript is fun".split(" ");
console.log(jsWords[1]);

function startsWithHello(str) {
  return str.startsWith("Hello");
}
console.log(startsWithHello("Hello World"));
console.log(startsWithHello("Hi there"));

function checkImageFile(filename) {
  return filename.startsWith("img_") ? "Image file" : "Not an image file";
}
console.log(checkImageFile("img_cat.png"));

function checkStoryStart(sentence) {
  return sentence.startsWith("Once upon");
}
console.log(checkStoryStart("Once upon a time..."));

function startsWithAt(str, sub, pos) {
  return str.startsWith(sub, pos);
}
console.log(startsWithAt("JavaScript", "Script", 4));

function countDoctors(names) {
  return names.filter(name => name.startsWith("Dr.")).length;
}
console.log(countDoctors(["Dr. Smith", "John", "Dr. Adams"]));

function cleanString(str) {
  return str.trim();
}
console.log(cleanString("   Hello World   "));

let strWithLeading = "    OpenAI";
console.log(strWithLeading.trimStart());

let strWithTrailing = "ChatGPT    ";
console.log(strWithTrailing.trimEnd());

function cleanUsernames(usernames) {
  return usernames.map(u => u.trim());
}
console.log(cleanUsernames([" Alice ", " Bob ", "  Eve  "]));

function isEmptyInput(input) {
  return input.trim() === "";
}
console.log(isEmptyInput("    "));

function allPassed(students) {
  return students.every(s => s.score >= 50);
}
console.log(allPassed([{name: "Alice", score: 60}, {name: "Bob", score: 70}]));

function allEven(nums) {
  return nums.every(n => n % 2 === 0);
}
console.log(allEven([2, 4, 6]));
console.log(allEven([2, 3, 6]));

function validEmails(emails) {
  return emails.every(email => email.includes("@"));
}
console.log(validEmails(["test@mail.com", "user@site.org"]));

function allAdults(ages) {
  return ages.every(age => age >= 18);
}
console.log(allAdults([20, 25, 30]));
console.log(allAdults([17, 22]));