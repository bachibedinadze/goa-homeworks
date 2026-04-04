const { MongoClient } = require("mongodb");

async function main() {
  const uri = "mongodb://localhost:27017";
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db("myDatabase");

    await db.collection("users").insertOne({ name: "Ana", age: 24, city: "Tbilisi" });
    console.log("Inserted Ana into users");

    await db.collection("products").insertOne({ name: "Laptop", price: 1200, inStock: true });
    console.log("Inserted Laptop into products");

    await db.collection("customers").insertOne({
      name: "David",
      age: 31,
      address: { city: "Batumi", street: "Rustaveli", number: 10 }
    });
    console.log("Inserted David into customers");

    await db.collection("products").insertMany([
      { name: "Phone", price: 800, category: "Electronics" },
      { name: "Tablet", price: 500, category: "Electronics" },
      { name: "Chair", price: 150, category: "Furniture" },
      { name: "Desk", price: 300, category: "Furniture" }
    ]);
    console.log("Inserted multiple products");

    await db.collection("students").insertMany([
      { name: "Nino", age: 20, courses: ["Math", "Physics"] },
      { name: "Giorgi", age: 22, courses: ["Biology", "Chemistry"] },
      { name: "Lika", age: 21, courses: ["History", "English"] }
    ]);
    console.log("Inserted students");

    await db.collection("users").updateOne({ name: "Ana" }, { $set: { age: 25 } });
    console.log("Updated Ana's age to 25");

    await db.collection("users").updateOne({ name: "Giorgi" }, { $set: { city: "Batumi" } });
    console.log("Updated Giorgi's city to Batumi");

    await db.collection("customers").updateOne({ name: "David" }, { $set: { "address.city": "Kutaisi" } });
    console.log("Updated David's city to Kutaisi");

    await db.collection("customers").updateOne({ name: "Ana" }, { $set: { "address.street": "Chavchavadze" } });
    console.log("Updated Ana's street to Chavchavadze");

  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
    console.log("Connection closed");
  }
}

main();