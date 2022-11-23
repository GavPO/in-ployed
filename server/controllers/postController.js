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
        const newPost = await Post.create(req.body)
        const associatedUser = await User.findOneAndUpdate(
            {  _id: req.body.userId },
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

async function updatePost(req, res) {
    try {
        const updatedPost = await Post.findOneAndUpdate(
            { _id: req.params.postId },
            { $set: req.body },
            { new: true },
        ).select('-__v');
        res.status(200).json(updatedPost)
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    };
};

async function deletePost(req, res) {
    try {
        await Post.findOneAndDelete({ _id: req.params.postId });
        const associatedUser = await User.findOneAndUpdate(
            { posts: req.params.postId },
            { $pull: { posts: req.params.postId }},
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
    createPost,
    updatePost,
    deletePost
}