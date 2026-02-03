const { readFile } = require('fs/promises');

async function readTextFile() {
  const data = await readFile('./text.txt', 'utf-8');
  console.log(data);
}

readTextFile();