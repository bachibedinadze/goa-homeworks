const express = require("express");

const phoneRoutes = require("./routes/phoneRoutes");
const globalErrorHandler = require("./controllers/error.controller");

const AppError = require("./utils/appError");

const app = express();

app.use(express.json());

app.use("/api/v1/phones", phoneRoutes);


// UNHANDLED ROUTES
app.all("*", (req, res, next) => {
  next(
    new AppError(
      `Can't find ${req.originalUrl} on this server`,
      404
    )
  );
});


// GLOBAL ERROR HANDLER
app.use(globalErrorHandler);

module.exports = app;