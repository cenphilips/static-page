const express = require('express');
const CommentController = require('../controller/CommentController');

const router = express.Router();

router.post('/comments', CommentController.createComment);
router.get('/comments', CommentController.getAllComments);
router.get('/comments/:id', CommentController.getCommentById);
router.get('/comments/user/:user_id', CommentController.getCommentsByUserId);
router.get('/comments/post/:post_id', CommentController.getCommentsByPostId);
router.put('/comments/:id', CommentController.updateCommentById);
router.delete('/comments/:id', CommentController.deleteCommentById);

module.exports = router;
