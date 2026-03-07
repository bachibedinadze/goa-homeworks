const fs = require("fs/promises");
const path = require("path");

const dbPath = path.join(__dirname, "../data/db.json");

async function readFile() {
  try {
    const data = await fs.readFile(dbPath, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading file:", error);
    throw error;
  }
}

module.exports = readFile;