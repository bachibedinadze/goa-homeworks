const express = require("express");
const fs = require("fs");
const path = require("path");
const readFile = require("./utils/readFile");

const app = express();
const PORT = 3000;

app.use(express.json());


const writeFile = (data) => {
  const filePath = path.join(__dirname, "./data/books.json");
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};



app.get("/books", (req, res) => {
  try {
    let books = readFile();
    const { title, author } = req.query;

    if (title) {
      books = books.filter(book =>
        book.title.toLowerCase().includes(title.toLowerCase())
      );
    }

    if (author) {
      books = books.filter(book =>
        book.author.toLowerCase().includes(author.toLowerCase())
      );
    }

    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});


app.get("/books/:id", (req, res) => {
  try {
    const books = readFile();
    const id = parseInt(req.params.id);

    const book = books.find(b => b.id === id);

    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});


app.post("/books", (req, res) => {
  try {
    const books = readFile();
    const { title, author } = req.body;

    if (!title || !author) {
      return res.status(400).json({ message: "Title and author are required" });
    }

    const newBook = {
      id: books.length ? books[books.length - 1].id + 1 : 1,
      title,
      author
    };

    books.push(newBook);
    writeFile(books);

    res.status(201).json(newBook);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});