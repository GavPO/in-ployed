const { Schema, model } = require("mongoose");
const postSchema = require("./Post");

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
    match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Enter a valid email"],
  },
  password: {
    type: String,
    require: true,
    minlength: 5,
  },
  posts: [postSchema],
  upvotes: {
    type: Number,
  },
});

const User = model("user", userSchema);

module.exports = User;
