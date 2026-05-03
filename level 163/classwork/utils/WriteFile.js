const fs = require("fs").promises;

const WriteFile = async (fileURLToPath, data) => {
    try {
        const jsonData = JSON.stringify(data,);

        await fs.WriteFile(fileURLToPath, jsonData, "utf-8");

        return {
            message: "Data saved succssfully"
        }
    }   catch (error) {
        return {
            message: "Error saving data",
            error: error.message
        };
    }
};

module.exports = WriteFile;