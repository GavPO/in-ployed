const router = require('express').Router();
const { 
    getAllPosts,
    getPostById,
    createPost,
    updatePost,
    deletePost,
    upvotePost,
} = require('../../controllers/postController');

// /api/posts/
router.route('/').get(getAllPosts).post(createPost);

// /api/Posts/postId
router.route('/:postId').get(getPostById).put(updatePost).delete(deletePost);

// /api/Posts/upvotes
router.route('/upvotes/:postId/:userId').put(upvotePost);

module.exports = router;