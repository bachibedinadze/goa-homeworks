const fs = require("fs");

const WriteFile = (path, data) => {
  fs.writeFileSync(path, JSON.stringify(data, null, 2));
};

module.exports = WriteFile;