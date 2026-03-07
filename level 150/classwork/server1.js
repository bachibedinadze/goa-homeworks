const express = require("express");

const app = express();

app.use(express.json());


app.use((req, res, next) => {
  const timestamp = new Date().toISOString();

  console.log(`Method: ${req.method}`);
  console.log(`URL: ${req.url}`);
  console.log(`Timestamp: ${timestamp}`);
  console.log("----------------------");

  next();
});


app.get("/", (req, res) => {
  res.send("Server is running");
});


const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});