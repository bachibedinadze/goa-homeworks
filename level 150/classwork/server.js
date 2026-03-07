const express = require("express");

const app = express();

app.use(express.json());


app.use("/isWorking", (req, res) => {

  console.log("Request Path:", req.path);
  console.log("Query:", req.query);

  res.status(200).json([req.path, req.query]);
});


const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});