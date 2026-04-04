// app.js
const { MongoClient } = require("mongodb");

async function main() {
  const uri = "mongodb://localhost:27017"; // შენი MongoDB URI
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db("myDatabase");
    const collection = db.collection("number_collection");

    console.log("Task 1 — View All Documents");
    console.log(await collection.find().toArray());

    console.log("\nTask 2 — number_value_1 > 500");
    console.log(await collection.find({ number_value_1: { $gt: 500 } }).toArray());

    console.log("\nTask 3 — number_value_1 > 300 AND number_value_3 < 0");
    console.log(await collection.find({ number_value_1: { $gt: 300 }, number_value_3: { $lt: 0 } }).toArray());

    console.log("\nTask 4 — Projection: text_value and number_value_1");
    console.log(await collection.find({}, { projection: { text_value: 1, number_value_1: 1, _id: 0 } }).toArray());

    console.log("\nTask 5 — number_value_2 > 700 with Projection");
    console.log(await collection.find({ number_value_2: { $gt: 700 } }, { projection: { text_value: 1, number_value_2: 1, _id: 0 } }).toArray());

    console.log("\nTask 6 — Sort by number_value_1 ascending");
    console.log(await collection.find().sort({ number_value_1: 1 }).toArray());

    console.log("\nTask 7 — Sort by number_value_2 descending");
    console.log(await collection.find().sort({ number_value_2: -1 }).toArray());

    console.log("\nTask 8 — number_value_1 > 200, sort by number_value_3 ascending");
    console.log(await collection.find({ number_value_1: { $gt: 200 } }).sort({ number_value_3: 1 }).toArray());

    console.log("\nTask 9 — Limit to first 5 documents");
    console.log(await collection.find().limit(5).toArray());

    console.log("\nTask 10 — Sort by number_value_2 descending, limit 10");
    console.log(await collection.find().sort({ number_value_2: -1 }).limit(10).toArray());

    console.log("\nTask 11 — Count all documents");
    console.log(await collection.countDocuments());

    console.log("\nTask 12 — Count documents where number_value_1 > 400");
    console.log(await collection.countDocuments({ number_value_1: { $gt: 400 } }));

    console.log("\nTask 13 — Check field number_value_3 exists");
    console.log(await collection.find({ number_value_3: { $exists: true } }).toArray());

    console.log("\nTask 14 — Check field number_value_3 does NOT exist");
    console.log(await collection.find({ number_value_3: { $exists: false } }).toArray());

    console.log("\nTask 15 — Combined task: number_value_1 > 100 and number_value_2 exists, sort descending, limit 3");
    console.log(await collection.find({ number_value_1: { $gt: 100 }, number_value_2: { $exists: true } })
      .sort({ number_value_1: -1 })
      .limit(3)
      .toArray());

  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

main();