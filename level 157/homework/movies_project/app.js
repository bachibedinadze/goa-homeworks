const { MongoClient } = require("mongodb");

async function main() {
  const uri = "mongodb://localhost:27017"; 
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db("myDatabase");
    const movies = db.collection("movies");

    console.log("1. Movie where genres array is exactly ['Sci-Fi', 'Action']");
    console.log(await movies.find({ genres: ["Sci-Fi", "Action"] }).toArray());

    console.log("\n2. Movie where cast array exactly contains ['Keanu Reeves', 'Laurence Fishburne']");
    console.log(await movies.find({ cast: ["Keanu Reeves", "Laurence Fishburne"] }).toArray());

    console.log("\n3. Movies that contain 'Sci-Fi' in genres");
    console.log(await movies.find({ genres: "Sci-Fi" }).toArray());

    console.log("\n4. Movies that include Anne Hathaway in cast");
    console.log(await movies.find({ cast: "Anne Hathaway" }).toArray());

    console.log("\n5. Movies that include both 'Sci-Fi' and 'Adventure' in genres");
    console.log(await movies.find({ genres: { $all: ["Sci-Fi", "Adventure"] } }).toArray());

    console.log("\n6. Movies that contain both 'Action' and 'Drama' in genres");
    console.log(await movies.find({ genres: { $all: ["Action", "Drama"] } }).toArray());

    console.log("\n7. Movies with IMDb rating > 8 AND featured");
    console.log(await movies.find({ imdb_rating: { $gt: 8 }, featured: true }).toArray());

    console.log("\n8. Movies released after 2010 with IMDb rating above 8.5");
    console.log(await movies.find({ release_year: { $gt: 2010 }, imdb_rating: { $gt: 8.5 } }).toArray());

    console.log("\n9. Movies where genres contain both 'Sci-Fi' and 'Adventure' together");
    console.log(await movies.find({ genres: { $all: ["Sci-Fi", "Adventure"] } }).toArray());

    console.log("\n10. Movies where cast includes 'Matthew McConaughey'");
    console.log(await movies.find({ cast: "Matthew McConaughey" }).toArray());

    console.log("\n11. Top 5 highest rated movies");
    console.log(await movies.find().sort({ imdb_rating: -1 }).limit(5).toArray());

    console.log("\n12. Movies released before 2010 with rating above 8");
    console.log(await movies.find({ release_year: { $lt: 2010 }, imdb_rating: { $gt: 8 } }).toArray());

    console.log("\n13. Movies directed by 'Christopher Nolan' sorted by IMDb rating descending");
    console.log(await movies.find({ director: "Christopher Nolan" }).sort({ imdb_rating: -1 }).toArray());

  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

main();