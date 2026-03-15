const express = require("express");
const bodyParser = require("body-parser");
const errorhandler = require("errorhandler");

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.post("/users", (req, res) => {
    console.log(req.body);
    res.json({ message: "Recived data", data: req.body });
});

app.use(errorhandler());

app.listen(PORT, () => {
    console.log('Server running on port ${PORT}');
});