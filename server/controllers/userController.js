const User = require('../models/User');
const Post = require('../models/Post');

async function getAllUsers(req, res) {
    try {
        const allUsers = await User.find()
        .select('-__v')
        .populate('posts');
        res.status(200).json(allUsers)
    } catch (err) {
        console.error(err)
        res.status(500).json(err)
    }
};