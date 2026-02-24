const express = require("express");

const app = express();
const PORT = 3000

const products = [
    "Laptop",
    "Phone",
    "Monitor",
    "keyboard",
    "Mouse",
    "Headphones",
    "Camera",
    'Speaker',
    "Microphone",
];

app.get("/products", (req, res) => {
    res.status(200).json(products);
});

app.get("/products/:id", (req, res) => {
    const id = parseInt(req.params.id);

    if (id >= 0 && id < products.length) {
        res.status(200).json(products[id]);
    } else {
        res.status(404).send("Product not found");
    }
});

app.listen(PORT, () => {
    console.log('Server running on http://localhost:${PORT}');
});