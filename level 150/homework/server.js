const express = require("express");
const morgan = require("morgan");

const itemsRouter = require("./routers/items.router");

const app = express();

app.use(express.json());


let requestCount = 0;

app.use((req, res, next) => {
  requestCount++;

  console.log(`Total requests: ${requestCount}`);

  next();
});


app.use(morgan("dev"));


app.use("/api/items", itemsRouter);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});