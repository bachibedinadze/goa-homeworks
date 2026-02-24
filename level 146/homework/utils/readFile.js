const fs = require("fs");
const path = require("path");

const readFile = () => {
  const filePath = path.join(__dirname, "../data/books.json");
  const data = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(data);
};

module.exports = readFile;