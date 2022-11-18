const User = require('../models/User');
const Post = require('../models/Post')

async function getAllUsers(req, res) {
    try {
        const allUsers = await User.find()
        .select('-__v')
        .populate('posts');
        res.status(200).json(allUsers);
    } catch (err) {;
        console.error(err)
        res.status(500).json(err);
    };
};

async function getUserById(req, res) {
    try {
        const singleUser = await User.findById(req.params.userId)
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    };
};

async function createUser(req, res) {
    try {
        const userCheck = User.findOne({username: req.body.username});
        if (userCheck) {
            res.status(400).json({ message: 'That username is already taken! Please try again.' });
          return;
        }
        const newUser = await User.create(req.body);
        res.status(200).json(newUser);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    };
};

async function updateUser(req, res) {
    try {
      const updatedUser = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $set: req.body },
        { new: true },
      ).select('-__v');
      res.status(200).json(updatedUser);
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    };
  };

  async function deleteUser(req, res) {
    try {
      const deletedUser = await User.findOneAndRemove({ _id: req.params.userId });
      await Post.deleteMany({ _id: { $in: deletedUser.posts } });
      res.status(200).json(deletedUser);
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    };
  };

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
};