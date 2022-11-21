const { Schema, Types } = require("mongoose");

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
  userid: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = replySchema;
