const express = require("express");
const app = express();

app.use(express.json());

let books = [
  { id: 1, name: "Atomic Habits", price: 15 },
  { id: 2, name: "Deep Work", price: 20 },
];

app.post("/books", (req, res) => {
  const body = req.body;

  if (!body || Object.keys(body).length === 0) {
    return res.status(400).json({ error: "Request body cannot be empty." });
  }

  const { id, name, price } = body;

  if (id === undefined || name === undefined || price === undefined) {
    return res.status(400).json({
      error: "Book must include id, name, and price.",
    });
  }

  const exists = books.some((b) => b.id === id);
  if (exists) {
    return res.status(409).json({ error: `Book with id ${id} already exists.` });
  }

  books.push({ id, name, price });
  return res.status(201).json(books);
});

app.put("/books/:id", (req, res) => {
  const bookId = Number(req.params.id);
  const body = req.body;

  if (!body || Object.keys(body).length === 0) {
    return res.status(400).json({ error: "Request body cannot be empty." });
  }

  const bookIndex = books.findIndex((b) => b.id === bookId);

  if (bookIndex === -1) {
    return res.status(404).json({ error: `Book with id ${bookId} not found.` });
  }

  const book = books[bookIndex];
  const { name, price } = body;

  if (name === undefined && price === undefined) {
    return res.status(400).json({
      error: "You must provide at least one field to update (name or price).",
    });
  }

  const nameChanged = name !== undefined && name !== book.name;
  const priceChanged = price !== undefined && price !== book.price;

  if (!nameChanged && !priceChanged) {
    return res.status(400).json({
      error: "No changes detected. Provide a different name or price.",
    });
  }

  if (nameChanged) book.name = name;
  if (priceChanged) book.price = price;

  books[bookIndex] = book;

  return res.status(200).json(books);
});

app.delete("/books", (req, res) => {
  const body = req.body;

  if (!body || Object.keys(body).length === 0) {
    return res.status(400).json({ error: "Request body cannot be empty." });
  }

  const { id } = body;

  if (id === undefined) {
    return res.status(400).json({ error: "Book id is required." });
  }

  const bookIndex = books.findIndex((b) => b.id === id);

  if (bookIndex === -1) {
    return res.status(404).json({ error: `Book with id ${id} not found.` });
  }

  books.splice(bookIndex, 1);
  return res.status(200).json(books);
});

app.listen(3000, () => {
  console.log("Server running successfully on port 3000");
});