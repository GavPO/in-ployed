const router = require('express').Router();
const { 
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getAllUsers).post(createUser);

// /api/users/:userId
router.route('/:userId').get(getUserById).put(updateUser).delete(deleteUser);

module.exports = router;