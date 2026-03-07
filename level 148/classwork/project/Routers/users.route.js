const express = require("express");

const usersRouter = express.Router();

const users = [
    { id: 1, name: "Nika", age: 20 },
    { id: 2, name: "Giorgi", age: 22 },
    { id: 3, name: "Luka", age: 19 },
    { id: 4, name: "Saba", age: 25 },
];

usersRouter.get("/", (req, res) => {
    res.json(users);
});

usersRouter.get("/:id", (req, res) => {
    const user = user.find(u => u.id === Number(req.params.id));
    res.json(user);
});

module.exports = usersRouter;