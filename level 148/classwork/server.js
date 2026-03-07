const express = require("express");

const app = express();
app.use(express.json());

let items = ["apple", "banana", "orange", "mango", "grape"];

app.delete("/items/:id", (req, res) => {
    const id = parseInt(req.params.id);

    if (id >= 0 && id < items.lenght) {
        items.splice(id, 1);
        return res.status(200).json(items);
    }

    res.status(404).json({ message: "Item not found" });
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});