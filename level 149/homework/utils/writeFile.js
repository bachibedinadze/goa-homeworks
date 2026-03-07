const fs = require("fs/promises");
const path = require("path");

const dbPath = path.join(__dirname, "../data/db.json");

async function writeFile(data) {
  try {
    await fs.writeFile(dbPath, JSON.stringify(data, null, 2));
  } catch (error) {
    console.error("Error writing file:", error);
    throw error;
  }
}

module.exports = writeFile;