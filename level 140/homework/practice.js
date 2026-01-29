const EventEmitter = require("events");
const emitter = new EventEmitter();

emitter.on("hello", () => {
  console.log("1) Hello event received!");
});

emitter.on("message", (msg, num) => {
  console.log("2) Message event received:");
  console.log("Message:", msg);
  console.log("Number:", num);
});

emitter.emit("hello");
emitter.emit("message", "Hello from event", 42);

console.log("3 & 4) Type something and press Enter:");

process.stdin.setEncoding("utf8");

process.stdin.on("data", (input) => {
  const trimmed = input.trim();
  const upper = trimmed.toUpperCase();

  console.log("Original:", input);
  console.log("Trimmed:", trimmed);
  console.log("Uppercase:", upper);
});

const buf1 = Buffer.alloc(10);
buf1.write("Hello");

console.log("5) Fixed size buffer:");
console.log(buf1);
console.log(buf1.toString());

const str = "NodeJS";
const buf2 = Buffer.from(str);

console.log("6) String to buffer:");
console.log(str);
console.log(buf2);

const buf3 = Buffer.from("Hello World");

console.log("7) Buffer to string:");
console.log(buf3.toString());

const buf4 = Buffer.from("Hello");

console.log("8) Modify buffer bytes:");
console.log("Before:", buf4.toString());

buf4[0] = 89;

console.log("After:", buf4.toString());