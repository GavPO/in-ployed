const User = require("../models/User");
const Post = require("../models/Post");

async function getAllPosts(req, res) {
  try {
    const allPosts = await Post.find().select("-__v");
    const upvoteCounts = [];
    for (let i = 0; i < allPosts.length; i++) {
      upvoteCounts.push(allPosts[i].get("upvoteCount"));
    }
    res.status(200).json({ allPosts, upvoteCounts });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
}

async function getPostById(req, res) {
  try {
    const singlePost = await Post.findById(req.params.postId).select("-__v");
    res.status(200).json(singlePost);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
}

async function createPost(req, res) {
  try {
    const newPost = await Post.create(req.body);
    const associatedUser = await User.findOneAndUpdate(
      { _id: req.body.userId },
      { $addToSet: { posts: newPost._id } },
      { new: true }
    )
      .select("-__v")
      .populate("posts");
    res.status(200).json(associatedUser);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
}

async function updatePost(req, res) {
  try {
    const updatedPost = await Post.findOneAndUpdate(
      { _id: req.params.postId },
      { $set: req.body },
      { new: true }
    ).select("-__v");
    res.status(200).json(updatedPost);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
}

async function deletePost(req, res) {
  try {
    await Post.findOneAndDelete({ _id: req.params.postId });
    const associatedUser = await User.findOneAndUpdate(
      { posts: req.params.postId },
      { $pull: { posts: req.params.postId } },
      { new: true }
    )
      .select("-__v")
      .populate("posts");
    res.status(200).json(associatedUser);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
}

async function upvotePost(req, res) {
  try {
    // const thisPost = await Post.findById(req.params.postId)?
    const upvoteCheck = await Post.findOne({
      _id: req.params.postId,
      "upvotes.userId": req.params.userId,
    });
    if (upvoteCheck) {
      res.status(200).json({ message: "You have already upvoted this post!" });
      return;
    }
    // console.log(thisPost)
    // console.log(upvoteCheck)
    await Post.findOneAndUpdate(
      { _id: req.params.postId},
      { $pull: { downvotes: {userId: req.params.userId }} }
    );

    const upvotedPost = await Post.findOneAndUpdate(
      { _id: req.params.postId },
      { $addToSet: { upvotes: { userId: req.params.userId } } },
      { new: true }
    )
      .select(`-_id`)
      .select(`upvotes`);
    const upvoteCount = upvotedPost.get("upvoteCount");

    res.status(200).json({ upvotedPost, upvoteCount });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
}

async function downvotePost(req, res) {
  try {
    const downvoteCheck = await Post.findOne({
      _id: req.params.postId,
      "downvotes.userId": req.params.userId,
    });
    if (downvoteCheck) {
      res.status(200).json({ message: "You have already downvoted this post!" });
      return;
    }

    await Post.findOneAndUpdate(
      { _id: req.params.postId},
      { $pull: { upvotes: { userId: req.params.userId }} }
    );

    const downvotedPost = await Post.findOneAndUpdate(
      { _id: req.params.postId },
      { $addToSet: { downvotes: { userId: req.params.userId } } },
      { new: true }
    );
    const downvoteCount = downvotedPost.get("downvoteCount");
    res.status(200).json({downvotedPost, downvoteCount});
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
}

async function isUpvoted(req, res) {
  try {
    const upvoteCheck = await Post.findOne({
      _id: req.params.postId,
      "upvotes.userId": req.params.userId,
    });
    console.log(upvoteCheck)
    if (upvoteCheck) {
      res.status(200).json(upvoteCheck);
      return;
    }
    res.status(202).json(upvoteCheck);
    return;
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
}


module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
  upvotePost,
  isUpvoted,
  downvotePost,
};
