const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
    match: email,
  },
  password: {},
});

const User = model("User", userSchema);

module.exports = User;
