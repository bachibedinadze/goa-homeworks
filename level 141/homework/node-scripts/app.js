import { readFile } from 'fs/promises';
import fs from 'fs';
import readline from 'readline';

async function readTextFile() {
  const data = await readFile('example.txt', 'utf8');
  console.log(data);
}

async function readJsonFile() {
  const jsonData = await readFile('data.json', 'utf8');
  const parsed = JSON.parse(jsonData);
  console.log(parsed.name);
}

function readLargeFile() {
  const stream = fs.createReadStream('large.txt', 'utf8');
  const rl = readline.createInterface({
    input: stream,
    crlfDelay: Infinity
  });
  rl.on('line', (line) => {
    console.log(line);
  });
}

function writeUserInput() {
  const writeStream = fs.createWriteStream('output.txt');
  process.stdin.on('data', (chunk) => {
    writeStream.write(chunk);
  });
  process.stdin.on('end', () => {
    writeStream.end();
  });
  process.stdin.resume();
}

await readTextFile();
await readJsonFile();
readLargeFile();
writeUserInput();