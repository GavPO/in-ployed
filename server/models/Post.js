const { Schema, model, Types } = require("mongoose");
const userSchema = require("./User");
const replySchema = require("./Reply");

const postSchema = new Schema({
  postId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
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
    maxlength: 550,
    trim: true,
  },
  replies: [replySchema],

  userid: [
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

const Post = model("Post", postSchema);

module.exports = Post;
