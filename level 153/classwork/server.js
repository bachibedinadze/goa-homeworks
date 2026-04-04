const express = require("express");
const morgan = require("morgan");

const app = express();
const PORT = 3000;


app.use(morgan("dev")); 


const books = [
  { name: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 },
  { name: "1984", author: "George Orwell", year: 1949 },
  { name: "The Alchemist", author: "Paulo Coelho", year: 1988 }
];


app.get("/books", (req, res) => {
  res.status(200).json(books);
});


app.get("/books/:name", (req, res) => {
  const { name } = req.params;

  const book = books.find(
    (b) => b.name.toLowerCase() === name.toLowerCase()
  );

  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }

  res.status(200).json(book);
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});