const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: [true, "fullname is required"],
  },

  email: {
    type: String,
    required: [true, "email is required"],
    unique: true,
  },

  password: {
    type: String,
    required: [true, "password is required"],
    minlength: 8,
  },

  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
});

const Users = mongoose.model("Users", usersSchema);

module.exports = Users;