const { Schema, model, Types } = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Enter a valid email"],
  },
  github: {
    type: String,
    minlength: 1,
    maxlength: 30,
  },
  linkedin: {
    type: String,
    minlength: 1,
    maxlength: 30,
  },
  description: {
    type: String,
    minlength: 1,
    maxlength: 500,
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  posts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Post",
    },
  ],
  upvotes: {
    type: Number,
  },
});

userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

userSchema.methods.isCorrectPassword = async function (password) {
  console.log(this);
  return await bcrypt.compare(password, this.password);
};

const User = model("User", userSchema);

module.exports = User;
