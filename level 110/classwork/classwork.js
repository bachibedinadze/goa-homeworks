import fs from 'fs/promises';

async function getFootballData() {
  const url = "https://www.thesportsdb.com/api/v1/json/123/searchteams.php?t=Arsenal";

  try {
    const response = await fetch(url);
    const data = await response.json();

    await fs.writeFile("data.json", JSON.stringify(data, null, 2), "utf8");

    console.log("Data successfully saved to data.json");
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

getFootballData();