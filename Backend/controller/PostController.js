const Post = require('../model/Post');
const User = require('../model/User');

class PostController {
    static async createPost(req, res) {
        try {
            const { title, content, author_id } = req.body;
            const post = await Post.create({ title, content, author_id });
            res.status(201).json(post);
        } catch (error) {
            console.error('Error creating post:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    static async getAllPosts(req, res) {
        try {
            const posts = await Post.getAll();
            res.status(200).json(posts);
        } catch (error) {
            console.error('Error fetching posts:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    static async getPostById(req, res) {
        try {
            const { id } = req.params;
            const post = await Post.getById(id);
            if (post) {
                res.status(200).json(post);
            } else {
                res.status(404).json({ error: 'Post not found' });
            }
        } catch (error) {
            console.error('Error fetching post by id:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    static async getPostsByAuthorId(req, res) {
        try {
            const { author_id } = req.params;
            const author = await User.getById(author_id);
            if (!author) {
                return res.status(404).json({ error: 'Author not found' });
            }
            const posts = await Post.getByAuthorId(author_id);
            res.status(200).json(posts);
        } catch (error) {
            console.error('Error fetching posts by author id:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    static async updatePostById(req, res) {
        try {
            const { id } = req.params;
            const { title, content } = req.body;
            const post = await Post.getById(id);
            if (!post) {
                return res.status(404).json({ error: 'Post not found' });
            }
            const updatedPost = await Post.updateById(id, { title, content });
            res.status(200).json(updatedPost);
        } catch (error) {
            console.error('Error updating post by id:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    static async deletePostById(req, res) {
        try {
            const { id } = req.params;
            const post = await Post.getById(id);
            if (!post) {
                return res.status(404).json({ error: 'Post not found' });
            }
            await Post.deleteById(id);
            res.status(200).json({ message: 'Post deleted successfully' });
        } catch (error) {
            console.error('Error deleting post by id:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }
}

module.exports = PostController;