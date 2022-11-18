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

async function createPost(req, res) {
    try {
        const newPost = await Post.create(req.body.userId)
        const associatedUser = await User.findOneAndUpdate(
            { _id: req.body.userId },
            { $addToSet: { posts: newPost._id }},
            { new: true },
        ).select('-__v')
        .populate('posts');
        res.status(200).json(associatedUser);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    };
};

module.exports = {
    getAllPosts,
    getPostById,
    createPost
}