require("dotenv").config()

const express = require("express")
const morgan = require("morgan")

const app = express()

const filmsRouter = require("./routers/films")

app.use(express.json())
app.use(morgan("dev"))

app.use("/api/films", filmsRouter)

app.get("/", (req, res) => {
  res.send("Server is working")
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(Server is running on port ${PORT})
})