const myNameBuffer = Buffer.from("Bachi");

process.stdin.resume();
process.stdin.setEncoding("utf8");

process.stdin.on("data", (input) => {
  const cleanedInput = input.trim();
  const userBuffer = Buffer.from(cleanedInput);
  const combinedBuffer = Buffer.concat([userBuffer, myNameBuffer]);
  const result = combinedBuffer.toString();

  process.stdout.write(result + "\n");
  process.stdin.pause();
});