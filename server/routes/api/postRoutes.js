const router = require('express').Router();
const { 
    getAllPosts,
    getPostById,
    createPost,
    updatePost,
    deletePost,
    upvotePost,
} = require('../../controllers/postController');

// /api/posts
router.route('/').get(getAllPosts).post(createPost);

// /api/Posts/:userId
router.route('/:postId').get(getPostById).put(updatePost).delete(deletePost);;

// /api/Posts/PostId
router.route('/upvotes/:postId').get(upvotePost)

module.exports = router;