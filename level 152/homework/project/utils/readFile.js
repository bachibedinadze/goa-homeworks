const fs = require("fs");
const path = require("path");

const readFile = () => {
  const dataPath = path.join(__dirname, "../data/movies.json");

  const data = fs.readFileSync(dataPath, "utf-8");
  return JSON.parse(data);
};

module.exports = readFile;