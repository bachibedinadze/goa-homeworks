const users = [
  {
    id: 1,
    name: "Giorgi",
    age: 25
  },
  {
    id: 2,
    name: "Nino",
    age: 22
  },
  {
    id: 3,
    name: "Luka",
    age: 30
  }
];

const getUsers = (req, res) => {
  res.status(200).json(users);
};

module.exports = { getUsers };