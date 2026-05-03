const express = require("express");

const phoneRoutes = require("./routes/phoneRoutes");
const globalErrorHandler = require("./controllers/error.controller");

const app = express();

app.use(express.json());

app.use("/api/v1/phones", phoneRoutes);


// UNHANDLED ROUTES
app.all("*", (req, res, next) => {
  next(
    new Error(`Can't find ${req.originalUrl} on this server`)
  );
});


// GLOBAL ERROR HANDLER
app.use(globalErrorHandler);

module.exports = app;