const { Schema, model } = require("mongoose");

const postSchema = new Schema({
  job_title: {
    type: String,
    required: true,
  },
  business_name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Post = model("Post", postSchema);

module.exports = Post;
