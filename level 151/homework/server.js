require("dotenv").config();

const express = require("express");
const errorHandler = require("errorhandler");

const app = express();


app.get("/", (req, res) => {
  res.send(`Welcome to ${process.env.APP_NAME}`);
});


app.get("/error", (req, res) => {
  throw new Error("Intentional test error!");
});


if (process.env.NODE_ENV !== "production") {
  app.use(errorHandler());
}


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`${process.env.APP_NAME} running on port ${PORT}`);
});