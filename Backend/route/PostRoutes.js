const express = require('express');
const PostController = require('../controller/PostController');

const router = express.Router();

router.post('/posts', PostController.createPost);
router.get('/posts', PostController.getAllPosts);
router.get('/posts/:id', PostController.getPostById);
router.get('/posts/author/:author_id', PostController.getPostsByAuthorId);
router.put('/posts/:id', PostController.updatePostById);
router.delete('/posts/:id', PostController.deletePostById);

module.exports = router;