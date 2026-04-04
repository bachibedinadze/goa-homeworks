const { MongoClient } = require("mongodb");

const uri = "mongodb://127.0.0.1:27017";
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();

    const db = client.db("yourDatabaseName");
    const collection = db.collection("yourCollectionName");

    const result = await collection
      .find({ "language.main": "Sindhi" })
      .toArray();

    console.log(result);
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

run();