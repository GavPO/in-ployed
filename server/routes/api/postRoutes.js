const router = require('express').Router();
const { 
    getAllPosts,
    getPostById,
    createPost,
    updatePost,
    deletePost,
} = require('../../controllers/postController');

// /api/posts
router.route('/').get(getAllPosts).post(createPost);

// /api/Posts/:userId
router.route('/:postId').get(getPostById);

// /api/Posts/PostId
router.route('/:postId').put(updatePost).delete(deletePost);

module.exports = router;