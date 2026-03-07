const express = require("express");
const itemsRouter = require("./routers/items.router");

const app = express();

app.use(express.json());


app.use((req, res, next) => {
  console.log("Request Method:", req.method);
  next();
});


app.use("/api/items", itemsRouter);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});