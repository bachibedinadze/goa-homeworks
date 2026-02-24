const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/items", (req, res) => {
    console.log(req.query);
    res.send("Query recived");
});

app.post("/items", (req, res) => {
    console.log(req.body);
    res.send("Body recived");
});

app.listen(PORT, () => {
    console.log('server is running on http://localhost:${PORT}');
});