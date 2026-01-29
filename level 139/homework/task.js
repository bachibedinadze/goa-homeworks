const os = require("os");

console.log("2) process.platform:", process.platform);
console.log("3) process.platform (again):", process.platform);

console.log("4) Command-line arguments:");
process.argv.slice(2).forEach(arg => console.log(arg));

console.log("5) OS name and version:", os.type(), os.release());

console.log("6) Total memory:", os.totalmem());
console.log("   Free memory:", os.freemem());

console.log("7) Home directory:", os.homedir());

console.log("8) System uptime (seconds):", os.uptime());

console.log("9) Normal message");
console.warn("   Warning message");
console.error("   Error message");

console.log("10) Table:");
console.table({
  platform: process.platform,
  nodeVersion: process.version,
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
});