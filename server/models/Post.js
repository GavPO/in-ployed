const { Schema, model, Types } = require("mongoose");
const userSchema = require("./User");
const replySchema = require("./Reply");
const upvoteSchema = require('./Upvote')
const downvoteSchema = require('./Downvote')

const postSchema = new Schema({
  title: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 30,
    trim: true,
  },
  content: {
    type: String,
    required: true,
    minlength: 1,
    trim: true,
  },
  replies: [replySchema],

  upvotes: [upvoteSchema],

  downvotes: [downvoteSchema],

  userId: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

postSchema.virtual("upvoteCount").get(function () {
  return this.upvotes.length;
});

postSchema.virtual("downvoteCount").get(function () {
  return this.downvotes.length;
});

const Post = model("Post", postSchema);

module.exports = Post;
