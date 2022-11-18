const { Schema, model, Types } = require("mongoose");
const userSchema = require("./User");

const replySchema = new Schema({
  content: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 240,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  userid: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

const Reply = model("reply", replySchema);

module.exports = Reply;
