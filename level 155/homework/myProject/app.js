console.log("Hello, world!");


const { MongoClient } = require("mongodb");

async function main() {
  const uri = "mongodb://localhost:27017";
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db("myDatabase");
    const users = db.collection("users");


    const allUsers = await users.find().toArray();
    console.log(allUsers);
  } finally {
    await client.close();
  }
}

main().catch(console.error);