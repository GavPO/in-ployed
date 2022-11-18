const User = require("../models/User");
const Post = require("../models/Post");

async function getAllPosts(req, res) {
  try {
    const allPosts = await Post.find().select("-__v");
    res.status(200).json(allPosts);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  };
};

async function getPostById(req, res) {
    try {
        const singlePost = await Post.findById(req.params.id).select('-__v');
        res.status(200).json(singlePost);
    } catch (err) {
        console.error(err)
        res.status(500).json(err)
    };
};