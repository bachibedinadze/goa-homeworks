const express = require("express");
const usersRouter = require("./routers/users.route");

const app = express();

app.use(express.json());


app.use((req, res, next) => {
  console.log("Request Method:", req.method);
  console.log("Request Body:", req.body);

  next();
});


app.use("/users", usersRouter);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});