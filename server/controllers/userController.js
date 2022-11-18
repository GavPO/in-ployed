const User = require('../models/User');

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
    const userCheck = User.findOne({username: req.body.username});
    if (userCheck) {
        res.status(400).json({ message: 'That username is already taken! Please try again.' });
      return;
    }
}

module.exports = {
    getAllUsers,
    getUserById
};