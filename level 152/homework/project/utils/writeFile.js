const fs = require("fs");
const path = require("path");

const writeFile = (data) => {
  const dataPath = path.join(__dirname, "../data/movies.json");

  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
};

module.exports = writeFile;