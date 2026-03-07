const express = require("express");
const router = express.Router();

const readFile = require("../utils/readFile");
const writeFile = require("../utils/writeFile");


// GET all items
router.get("/", async (req, res) => {
  try {
    const items = await readFile();
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});


// GET item by ID
router.get("/:id", async (req, res) => {
  try {
    const items = await readFile();
    const item = items.find(i => i.id === req.params.id);

    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }

    res.status(200).json(item);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});


// CREATE new item
router.post("/", async (req, res) => {
  try {
    const { name, price } = req.body;

    if (!name || price === undefined) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const items = await readFile();

    const newItem = {
      id: Date.now().toString(),
      name,
      price
    };

    items.push(newItem);

    await writeFile(items);

    res.status(201).json(newItem);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});


// UPDATE item
router.put("/:id", async (req, res) => {
  try {
    const items = await readFile();
    const index = items.findIndex(i => i.id === req.params.id);

    if (index === -1) {
      return res.status(404).json({ message: "Item not found" });
    }

    items[index] = {
      ...items[index],
      ...req.body
    };

    await writeFile(items);

    res.status(200).json(items[index]);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});


// DELETE item
router.delete("/:id", async (req, res) => {
  try {
    const items = await readFile();
    const filtered = items.filter(i => i.id !== req.params.id);

    if (filtered.length === items.length) {
      return res.status(404).json({ message: "Item not found" });
    }

    await writeFile(filtered);

    res.status(200).json({ message: "Item deleted" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;