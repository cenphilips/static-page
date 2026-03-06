const Post = require('../model/Post');
const User = require('../model/User');
const Comment = require('../model/Comment')

class CommentController {
    static async createComment(req, res) {
        try {
            const { content, post_id, user_id } = req.body;
            const comment = await Comment.create({ content, post_id, user_id });
            res.status(201).json(comment);
        } catch (error) {
            console.error('Error creating comment:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    static async getAllComments(req, res) {
        try {
            const comments = await Comment.getAll();
            res.status(200).json(comments);
        } catch (error) {
            console.error('Error fetching comments:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    static async getCommentById(req, res) {
        try {
            const { id } = req.params;
            const comment = await Comment.getById(id);
            if (comment) {
                res.status(200).json(comment);
            } else {
                res.status(404).json({ error: 'comment not found' });
            }
        } catch (error) {
            console.error('Error fetching comment by id:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    static async getCommentsByUserId(req, res) {
        try {
            const { user_id } = req.params;
            const user = await User.getById(user_id);
            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }
            const comments = await Comment.getByUserId(user_id);
            res.status(200).json(comments);
        } catch (error) {
            console.error('Error fetching comments by user id:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    static async getCommentsByPostId(req, res) {
        try {
            const { post_id } = req.params;
            const post = await Post.getById(post_id);
            if (!post) {
                return res.status(404).json({ error: 'Post not found' });
            }
            const comments = await Comment.getByUserId(post_id);
            res.status(200).json(comments);
        } catch (error) {
            console.error('Error fetching comments by post id:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    static async updateCommentById(req, res) {
        try {
            const { id } = req.params;
            const { content } = req.body;
            const comment = await Comment.getById(id);
            if (!comment) {
                return res.status(404).json({ error: 'Comment not found' });
            }
            const updatedComment = await Comment.updateById(id, { content });
            res.status(200).json(updatedComment);
        } catch (error) {
            console.error('Error updating comment by id:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    static async deleteCommentById(req, res) {
        try {
            const { id } = req.params;
            const comment = await Comment.getById(id);
            if (!comment) {
                return res.status(404).json({ error: 'Comment not found' });
            }
            await Comment.deleteById(id);
            res.status(200).json({ message: 'Comment deleted successfully' });
        } catch (error) {
            console.error('Error deleting comment by id:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }
}

module.exports = CommentController;