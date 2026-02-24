const express = require("express");
const readFile = require("./utils/readFile");

const app = express();
const PORT = 3000;

app.get("/books", (req, res) => {
  try {
    const books = readFile();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.get("/books/:id", (req, res) => {
  try {
    const books = readFile();
    const id = parseInt(req.params.id);

    const book = books.find((b) => b.id === id);

    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});