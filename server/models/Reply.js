const { Schema, model, Types } = require("mongoose");
const userSchema = require("./User");

const replySchema = new Schema({
  replyId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
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
  username: [userSchema],
});

const Reply = model("reply", replySchema);

module.exports = Reply;
