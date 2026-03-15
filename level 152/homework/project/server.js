const express = require("express");
const movieRoutes = require("./routes/movieRoutes");

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/movies", movieRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});